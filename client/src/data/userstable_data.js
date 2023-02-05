import axios from "axios";
import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';

export const UsersTable = () => {
    const [usersData, setUsersData] = useState([]);

    const endpoint = 'http://localhost:5000/usuarios'

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const usersData = response.data;
            setUsersData(usersData);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    // Columns

    const usersColumns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70
        },
        {
            field: 'fullname',
            headerName: 'Nombre del colaborador',
            width: 250
        },
        {
            field: 'username',
            headerName: 'Usuario',
            width: 150
        },
        {
            field: 'sucursal',
            headerName: 'Sucursal',
            width: 200
        },
        {
            field: 'puesto',
            headerName: 'Puesto',
            width: 200
        },
    ];

    return (
        <DataGrid
            rows={usersData}
            columns={usersColumns}
            pageSize={10}
        />
    );
};