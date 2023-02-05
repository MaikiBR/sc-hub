import { faIdCard, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete, Box, Button, InputAdornment, Tab, Tabs, TextField, Typography } from "@mui/material";
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
                                label="Ingresar nombre completo de colaborador..." 
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <FontAwesomeIcon icon={faIdCard} />
                                      </InputAdornment>
                                    ),
                                }}
                                value={fullname}
                                onChange={e => setFullname(e.target.value)}
                                required
                            />
                            <TextField
                                sx={{ width:"550px" }} 
                                label="Ingresar nombre de usuario..." 
                                variant="filled"
                                value={username}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <FontAwesomeIcon icon={faUser} />
                                      </InputAdornment>
                                    ),
                                }}
                                onChange={e => setUsername(e.target.value)}
                                required 
                            />
                            <TextField
                                sx={{ width:"550px" }} 
                                label="Ingresar contraseña..." 
                                variant="filled"
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <FontAwesomeIcon icon={faKey} />
                                      </InputAdornment>
                                    ),
                                }}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required 
                            />
                            <Autocomplete
                                sx={{ width:"550px" }} 
                                options={sucursales}
                                // getOptionLabel={(sucursales) => sucursales.suc_name}
                                // getOptionSelected={(sucursales, value) => sucursales.suc_id === value.id}
                                renderInput={(params) => <TextField {...params} label="Seleccionar sucursal..." variant="filled" required/>}
                                onChange={(event, newValue) => {
                                    setSucursal(newValue.id);
                                }}
                            />
                            <Autocomplete
                                sx={{ width:"550px" }} 
                                options={puestos}
                                // getOptionLabel={(puestos) => puestos.jobpos_name}
                                // getOptionSelected={(puestos, value) => puestos.jobpos_id === value.id}
                                renderInput={(params) => <TextField {...params} label="Seleccionar puesto..." variant="filled" required/>}
                                onChange={(event, newValue) => {
                                    setPuesto(newValue.id);
                                }}
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