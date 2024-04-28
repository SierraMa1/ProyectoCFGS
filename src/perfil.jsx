import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from './header';
import { useNavigate } from 'react-router-dom';


const Perfil = ({ tipo }) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [userValoraciones, setUserValoraciones] = useState({});
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const urlApi = tipo === 'electricista'
        ? `http://localhost:3400/api/electricistas/${id}`
        : `http://localhost:3400/api/usuarios/${id}`;

    const checkUser = () => {
        const name = localStorage.getItem('name');
        const idLocalStorage = localStorage.getItem('id');
        if (!name || idLocalStorage !== id ) {
            navigate('/'); 
        }
        return {
            'name': name,
            'id': idLocalStorage,
        };
    } ;

    const datosLocalStorage = checkUser();

    useEffect(() => {
        fetch(urlApi)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUserData(data.data)
                setUserValoraciones(data.valoraciones)
                setFormData(data.data)
            })
    }, [id])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setUserData(formData);
        const urlencoded = new URLSearchParams();
        urlencoded.append("nombre", formData.nombre);
        urlencoded.append("apellidos", formData.apellidos);
        urlencoded.append("password", formData.password);
        urlencoded.append("telefono", formData.telefono);
        urlencoded.append("email", formData.email);
        urlencoded.append("ubicacion", formData.ubicacion);
        urlencoded.append("nombreEmpresa", formData.nombreEmpresa);
        urlencoded.append("servicios", formData.servicios);
        console.log(urlencoded)
        console.log(urlApi)
        try {
            const response = await fetch(urlApi, {
                method: 'PUT',
                body: urlencoded,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Error al guardar el usuario');
            }

            setTimeout(() => {
                alert('Cambios guardados correctamente');
            }, 1000);
        } catch (error) {
            console.log(error);
            alert('No se pudieron guardar los cambios');
        }
        setEditing(false);
    };

    const eliminar = async () => {
        try {
            const response = await fetch(urlApi, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Error al guardar el usuario');
            }

            setTimeout(() => {
                alert('Usuario eliminado correctamente');
            }, 1000);
        } catch (error) {
            console.log(error);
            alert('No se pudo borrar usuario');
        }
    }

if (!userData) return null;

return (
    <>
    <Header />
    <div className="container mx-auto mt-8">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-bold mb-4">Información del Usuario</h2>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Agregar campos de formulario adicionales según el tipo de usuario */}
                    {tipo !== 'electricista' ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                                    Apellidos:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellidos"
                                    type="text"
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ubicacion">
                                    Ubicación:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="ubicacion"
                                    type="text"
                                    name="ubicacion"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valoraciones">
                                    Valoraciones:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="valoraciones"
                                    type="number"
                                    name="valoraciones"
                                    value={formData.valoraciones}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                                    Apellidos:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellidos"
                                    type="text"
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreEmpresa">
                                    Nombre de la Empresa:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombreEmpresa"
                                    type="text"
                                    name="nombreEmpresa"
                                    value={formData.nombreEmpresa}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                                    Teléfono:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servicios">
                                    Servicios:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="servicios"
                                    type="text"
                                    name="servicios"
                                    value={formData.servicios}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Guardar
                    </button>
                    <a
                        onClick={() => { setEditing(false) }}><span
                            className="text-red-400 hover:bg-slate-100 cursor-pointer font-bold py-2 px-4"
                        >
                            Cancelar</span>
                    </a>
                </form>
            ) : (
                <>
                    <p className="mb-4"><span className="font-semibold">Nombre:</span> {userData.nombre}</p>
                    {tipo === 'cliente' ? (
                        <>
                            <p className="mb-4"><span className="font-semibold">Apellidos:</span> {userData.apellidos}</p>
                            <p className="mb-4"><span className="font-semibold">Ubicación:</span> {userData.ubicacion}</p>
                            <p className="mb-4"><span className="font-semibold">Valoraciones:</span> {userData.valoraciones}</p>
                        </>
                    ) : (
                        <>
                            <p className="mb-4"><span className="font-semibold">Apellidos:</span> {userData.apellidos}</p>
                            <p className="mb-4"><span className="font-semibold">Ubicación:</span> {userData.ubicacion}</p>
                            <p className="mb-4"><span className="font-semibold">Nombre de la Empresa:</span> {userData.nombreEmpresa}</p>
                            <p className="mb-4"><span className="font-semibold">Email:</span> {userData.email}</p>
                            <p className="mb-4"><span className="font-semibold">Teléfono:</span> {userData.telefono}</p>
                            <p className="mb-4"><span className="font-semibold">Servicios:</span> {userData.servicios}</p>
                        </>
                    )}
                    <img src={tipo === 'electricista' ? '../../images/imagenesElectricistas/'+id+'.jpg' : '../../images/nofoto.png'} alt="Foto de perfil" className="w-32 h-32 mx-auto rounded-full mb-4" />
                    <button
                        onClick={() => setEditing(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                        Editar
                    </button>
                    <button
                        onClick={eliminar}
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    >
                        Eliminar
                    </button>
                </>
            )}
        </div>
    </div>
    </>
);
};

export default Perfil;