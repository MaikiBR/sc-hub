const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./build/config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;


// middleware
app.use(cors());
app.use(express.json());

//#region ROUTES

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query(
            'SELECT id FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length === 0) {
            return res.status(401).send({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ sub: result.rows[0].id }, 'secretKey');
        res.send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
});

app.post("/logout", async (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(401).send({ error: "Unauthorized" });
    }

    const bearerToken = bearerHeader.split(" ")[1];
    if (!bearerToken) {
        return res.status(401).send({ error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(bearerToken, secret);
    
        const query = 'UPDATE tokens SET invalidated_at = $1 WHERE token = $2 AND invalidated_at IS NULL';
        const values = [new Date(), bearerToken];
    
        const result = await client.query(query, values);
    
        if (result.rowCount === 0) {
          return res.status(401).send({ error: "Unauthorized" });
        }
    
        return res.status(200).send({ message: "Logged out" });
      } catch (error) {
        return res.status(401).send({ error: "Unauthorized" });
    }
})

//#region Users
// Add a user
app.post("/agregarUsuario", async(req, res) => {
    // const { username, password, fullname, sucursal_id, jobpos_id } = req.body;

    // const hash = await bcrypt.hash(password, saltRounds);
    // const query = "INSERT INTO users (username, password, fullname, sucursal, puesto) VALUES($1, $2, $3, $4, $5) RETURNING id"
    // const values = [username, hash];

    // const result = await pool.query(query, values);
    // const userId = result.rows[0].id;

    // const token = jwt.sign({ userId }, secret, { expiresIn: '1h' });

    // const insertTokenQuery = 'INSERT INTO tokens (token, user_id) VALUES ($1, $2)';
    // const insertTokenValues = [token, userId];

    // await pool.query(insertTokenQuery, insertTokenValues);

    // return res.status(200).send({ token });
    try {
        
        const { username, password, fullname, sucursal_id, jobpos_id } = req.body;
        const newUser = await pool.query("INSERT INTO users (username, password, fullname, sucursal, puesto) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [username, password, fullname, sucursal_id, jobpos_id]
        );

        res.json(newUser.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
})

// Get all users

app.get("/usuarios", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT u.id, u.username, u.fullname, u.sucursal, u.puesto, s.suc_name, p.jobpos_name FROM users u, sucursales s, puestos p WHERE u.sucursal = s.suc_id AND u.puesto = p.jobpos_id");
        res.json(allUsers.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// Get an user

app.get("/usuario/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT id, username, fullname, sucursal, puesto FROM users WHERE id = $1", [id]);
        res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// Update a user

app.put("/usuario/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { username, password, fullname, sucursal, puesto } = req.body;
        const updateUser = await pool.query("UPDATE users SET username = $1, password = $2, fullname = $3, sucursal = $4, puesto = $5 WHERE id = $6", 
            [username, password, fullname, sucursal, puesto, id]
        );
        res.json("Usuario fue actualizado!");
    } catch (err) {
        console.log(err.message);
    }
})

// Delete a user

app.delete("/usuario/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.json("Usuario fue eliminado!");
    } catch (err) {
        console.log(err.message);
    }
})
//#endregion

//#region Sucursales

// Get all sucursales

app.get("/sucursales", async(req, res) => {
    try {
        const allSuc = await pool.query("SELECT suc_id, suc_name FROM sucursales");
        res.json(allSuc.rows);
    } catch (err) {
        console.log(err.message);
    }
})

//#endregion

//#region Puestos

// Get all puestos

app.get("/puestos", async(req, res) => {
    try {
        const allJobPos = await pool.query("SELECT jobpos_id, jobpos_name, sucursal_id FROM puestos");
        res.json(allJobPos.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// Get puestos -> sucursales

app.get("/puestos/:id", async(req, res) => {
    try {
        const sucursal_id = req.params.id;
        const jobPos = await pool.query("SELECT p.jobpos_id, p.jobpos_name, s.suc_id, s.suc_name FROM puestos p, sucursales s WHERE p.sucursal_id = $1 AND s.suc_id = $1", [sucursal_id]);
        res.json(jobPos.rows);
    } catch (err) {
        console.log(err.message);
    }
})


//#endregion

//#endregion

app.listen(5000, () => {
    console.log("Server iniciado en port 5000.");
});