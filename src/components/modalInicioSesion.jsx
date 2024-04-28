import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalInicioSesion = ({ isOpen, onClose }) => {
    const [tipoUsuario, setTipoUsuario] = useState('electricista');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function fetchInicio() {
        
        const urlApi = 'http://localhost:3400/api/login';
        const urlencoded = new URLSearchParams();
        console.log(usuario, password, tipoUsuario);
        urlencoded.append("usuario", usuario);
        urlencoded.append("password", password);
        urlencoded.append("tipoUsuario", tipoUsuario);
        console.log(urlencoded);
        const response = await fetch(urlApi, {
            method: 'POST',
            body: urlencoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        });
      
        const data = await response.json();
        return data;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await fetchInicio();
            alert('Bienvenido ' + data[0].nombre);
            localStorage.setItem("name", data[0].nombre);
            localStorage.setItem("id", data[0].id);
            navigate(`/${tipoUsuario}/perfil/${data[0].id}`); // Redireccionar a la ruta deseada
            
        } catch (error) {
            console.log(error);
            alert('Datos introducidos erroneos')
        }
        
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-md mx-auto">
                <div className="relative flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-lg font-semibold">Iniciar Sesión</h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <form className="px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="tipoUsuario" className="block text-gray-900 font-bold mb-2 font-switzer">Tipo de usuario</label>
                            <select
                                id="tipoUsuario"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                value={tipoUsuario}
                                onChange={(e) => setTipoUsuario(e.target.value)}
                            >
                                <option value="electricista">Electricista</option>
                                <option value="cliente">Cliente</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                                Usuario
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="usuario"
                                type="text"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalInicioSesion;