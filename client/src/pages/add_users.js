import { Autocomplete, Button, TextField } from "@mui/material";
import { sucursales } from "../data/addusers_data";
import { puestos } from "../data/addusers_data";

const AddUsers = () => {
    return (
        <div className="exams-container">
            <div className="title">Alta de Usuarios</div>
            <br/> <br/>
            <TextField label="Nombre de colaborador" variant="filled" style={ {width: 300} }/>
            <br/> <br/>
            <TextField label="Nombre de usuario" variant="filled" style={ {width: 300} }/>
            <br/> <br/>
            <Autocomplete 
                disablePortal
                options={sucursales}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Sucursal" />}
            /> 
            <br/> 
            <Autocomplete 
                disablePortal
                options={puestos}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Puesto" />}
            />
            <br/>
            <Button 
                style={{
                    borderRadius: 15,
                    backgroundColor: "#001935",
                }}
                variant="contained"
            >
                Registrar
            </Button>             
        </div>
    );
}

export default AddUsers;

/*

*/