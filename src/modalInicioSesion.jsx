import React, { useState } from 'react';

const ModalInicioSesion = ({ isOpen, onClose }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de inicio de sesión, como enviar los datos al servidor, etc.
    // Por simplicidad, solo mostraremos los datos en la consola.
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);
    // Cierra el modal después de enviar el formulario
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="contraseña"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
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