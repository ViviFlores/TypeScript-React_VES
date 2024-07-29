import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuarios, Usuario } from "../interfaces/interfacesReqRes";

export const Usuarios = () => {

    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        // llamar a la endpoint - API
        reqResApi.get<ListaUsuarios>('/users').then(resp => {
            //console.log(resp.data.data);
            setUsers(resp.data.data);
        }).catch(console.log);
    }, []);

    //función manipular cada uno de los items del arreglo users
    const itemUsuario = ({first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr>
                <td>
                    <img src={avatar}/>
                </td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users.map((usuario) => itemUsuario(usuario)) 
                    } 
                </tbody>
            </table>
        </div>
    )
}
