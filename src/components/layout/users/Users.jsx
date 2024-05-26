import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.css';

const urlUsuarios = 'http://localhost:3500/users';

const Users = () => {
    //los estados para gestionar la lista de usuarios, el nuevo usuario y contraseña a agregar, el usuario en edición y sus nuevos valores.
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState('');
    const [nuevaContraseña, setNuevaContraseña] = useState('');
    const [usuarioEditado, setUsuarioEditado] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevaContraseñaEditada, setNuevaContraseñaEditada] = useState('');

    //se usa el  useEffect para obtener la lista de usuarios cuando el componente se monta. La función obtenerUsuarios hace una petición GET a la API y actualiza el estado usuarios con la respuesta.
    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const respuesta = await axios.get(urlUsuarios);
                setUsuarios(respuesta.data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };
        obtenerUsuarios();
    }, []);
    //aca estamos capturando los datos y actualizaros en sus estados 
    const handleNuevoUsuarioChange = (e) => {
        setNuevoUsuario(e.target.value);
    };

    const handleNuevaContraseñaChange = (e) => {
        setNuevaContraseña(e.target.value);
    };

    //Define la función agregarUsuario que se ejecuta al enviar el formulario para agregar un nuevo usuario. La función ,se pasa la e para que no enviemos le formulario y no carge de nuevo , crea un objeto nuevoUsuarioObj y hace una petición post a la api. Luego, limpia los campos del formulario y actualiza la lista de usuarios con una nueva petición get.
    const agregarUsuario = async (e) => {
        e.preventDefault();
        try {
            const nuevoUsuarioObj = {
                name: nuevoUsuario,
                password: nuevaContraseña,
            };
            // hacemos la peticion post y le tenemos que pasar la url a cual va ir y los datos 
            //que en este caso es el nuevo objeto 
            await axios.post(urlUsuarios, nuevoUsuarioObj);
            //aca despues de hacer esa peticion simplemente volvemos al estado vacio para que no tenga
            // ningun valor
            setNuevoUsuario('');
            setNuevaContraseña('');
            // Actualizar la lista de usuarios después de agregar un nuevo usuario
            const respuesta = await axios.get(urlUsuarios);
            setUsuarios(respuesta.data);
        } catch (error) {
            console.error('Error al agregar el usuario:', error);
        }
    };

    const eliminarUsuario = async (id) => {
        try {
            // función eliminarUsuario que toma un id como parámetro, hace una petición delete a la api para eliminar el usuario, y luego actualiza la lista de usuarios con una nueva petición get, que esta abajo.
            await axios.delete(`${urlUsuarios}/${id}`);
            // Actualizar la lista de usuarios después de eliminar un usuario
            const respuesta = await axios.get(urlUsuarios);
            setUsuarios(respuesta.data);
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };

    //aca estamos capturando los datos y mostrandolos en la pantalla , los datos a editar
    const editarUsuario = (usuario) => {
        setUsuarioEditado(usuario);
        setNuevoNombre(usuario.name);
        setNuevaContraseñaEditada(usuario.password);
    };

    const actualizarUsuario = async (e) => {
        // aca lo mismo , se crea un objeto nuevo con los datos a editar , se hace la peticion put con la url que esta la bd y el id del usuario que se editar , esto esta encerrado entre comillas invertidaspara que hacer que sea el primer parametro , el segundo que seria usuarioActualizado... seria la funcion con el objeto de este este usuario y lo mismo , se limpian los datos y se llama la api otra vez para actualizarla
        e.preventDefault();
        try {
            const usuarioActualizadoObj = {
                name: nuevoNombre,
                password: nuevaContraseñaEditada,
            };
            await axios.put(`${urlUsuarios}/${usuarioEditado.id}`, usuarioActualizadoObj);
            setUsuarioEditado(null);
            setNuevoNombre('');
            setNuevaContraseñaEditada('');
            // Actualizar la lista de usuarios después de editar un usuario
            const respuesta = await axios.get(urlUsuarios);
            setUsuarios(respuesta.data);
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
        }
    };

    return (
        // aca ya me da pereza comentar, en el return en cada uno de sus botones se pasa su funcion onclick o 
        //en su defecto onchange 
        <div className="usuarios-container">
            <h2>Usuarios Registrados</h2>
            <ul className="usuarios-lista">
                {usuarios.map((usuario) => (
                    //usamos map para generar la vista de usuarios registrados con sus respectivos campos 
                    <li key={usuario.id} className="usuario-item">
                        <span className="usuario-id">{usuario.id}</span>
                        <span className="usuario-nombre">{usuario.name}</span>
                        <span className="usuario-contraseña">{usuario.password}</span>
                        <button onClick={() => eliminarUsuario(usuario.id)} className="btn-eliminar">
                            Eliminar
                        </button>
                        <button onClick={() => editarUsuario(usuario)} className="btn-editar">
                            Editar
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Agregar Nuevo Usuario</h2>
            <form onSubmit={agregarUsuario} className="formulario-agregar">
                <input
                    type="text"
                    placeholder="Nuevo usuario"
                    value={nuevoUsuario}
                    onChange={handleNuevoUsuarioChange}
                    className="input-agregar"
                />
                <input
                    type="password"
                    placeholder="Nueva contraseña"
                    value={nuevaContraseña}
                    onChange={handleNuevaContraseñaChange}
                    className="input-agregar"
                />
                <button type="submit" className="btn-agregar">
                    Agregar Usuario
                </button>
            </form>
            {usuarioEditado && (
                <div className='container-editar'>
                    <h2>Editar Usuario</h2>
                    <form onSubmit={actualizarUsuario} className="formulario-editar">
                        <input
                            type="text"
                            placeholder="Nuevo nombre"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                            className="input-editar"
                        />
                        <input
                            type="password"
                            placeholder="Nueva contraseña"
                            value={nuevaContraseñaEditada}
                            onChange={(e) => setNuevaContraseñaEditada(e.target.value)}
                            className="input-editar"
                        />
                        <button type="submit" className="btn-editar">
                            Editar Usuario
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Users;