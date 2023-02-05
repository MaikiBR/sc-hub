import { Autocomplete, Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { color } from "@mui/system";
import { useState } from "react";
import { sucursales } from "../data/addusers_data";
import { puestos } from "../data/addusers_data";
import { UsersTable } from "../data/userstable_data";

const AdminManager = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [sucursal, setSucursal] = useState("");
    const [puesto, setPuesto] = useState("");

    const addUser = async e => {
        e.preventDefault();
        try {
            const body = { fullname, username, password, sucursal, puesto } ;
            const response = fetch("http://localhost:5000/agregarUsuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="admin-manager-container">
            <div className="title">Admin Manager</div>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#001935' }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange} 
                    centered
                    TabIndicatorProps={{sx: {backgroundColor: '#DD0C1C'}}} 
                    textColor="inherit"
                    sx={{
                        "& button": {color: '#e9d8b3'},
                        "& button:active": {color: '#dc1f0f'},
                    }}
                >
                    <Tab label="Alta de Usuarios"/>
                    <Tab label="Visualización de Usuarios"/>
                    <Tab label="Alta de Evaluaciones"/>
                </Tabs> 
            </Box>
            <div className="admin-manager-content">
                <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        <form className="adduser-form" onSubmit={addUser}>
                            <TextField
                                sx={{ width:"550px" }} 
                                label="Nombre de colaborador" 
                                variant="filled"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)}
                                required
                            />
                            <TextField
                                sx={{ width:"550px" }} 
                                label="Nombre de usuario" 
                                variant="filled"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required 
                            />
                            <TextField
                                sx={{ width:"550px" }} 
                                label="Contraseña" 
                                variant="filled"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required 
                            />
                            <Autocomplete
                                sx={{ width:"550px" }} 
                                options={sucursales}
                                renderInput={(params) => <TextField {...params} label="Sucursal" variant="filled" required/>}
                            />
                            <Autocomplete
                                sx={{ width:"550px" }} 
                                options={puestos}
                                renderInput={(params) => <TextField {...params} label="Puesto" variant="filled" required/>}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ backgroundColor: "#001935", "&:hover" : { backgroundColor: "#48577A" }  }}
                            >
                                REGISTRAR
                            </Button>
                        </form>
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <div className="datatable">
                            <UsersTable />
                        </div>
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <Typography>Alta de Evaluaciones</Typography>
                    </Box>
                )}
                </Box>
            </div> 
        </div>
    );
}

export default AdminManager;

{/* <form className="adduser-form" onSubmit={addUser}>
                <TextField 
                    label="Nombre de colaborador" 
                    variant="filled" 
                    style={ {width: 300} }
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                />

                <TextField 
                    label="Nombre de usuario" 
                    variant="filled" 
                    style={ {width: 300} }
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <TextField 
                    label="Contraseña" 
                    variant="filled" 
                    style={ {width: 300} }
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Autocomplete 
                    disablePortal
                    options={sucursales}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sucursal" />}
                /> 

                <Autocomplete 
                    disablePortal
                    options={puestos}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Puesto" />}
                />
                
                <button
                    type="submit" 
                    style={{
                        borderRadius: 15,
                        backgroundColor: "#001935",
                        width: "120px",
                        height: "40px",
                        color: "white",
                        cursor: "pointer"
                    }}

                >
                    REGISTRAR
                </button>
            </form>    */}