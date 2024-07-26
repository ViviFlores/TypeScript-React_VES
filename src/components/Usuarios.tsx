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
    const itemUsuario = (usuario: Usuario) => {
        return (
            <tr>
                <td>Foto</td>
                <td>Camila</td>
                <td>Castro</td>
                <td>ccastro@gmail.com</td>
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
