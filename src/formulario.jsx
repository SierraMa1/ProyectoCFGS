import React, { useState } from 'react';

const Formulario = ({onClose}) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [servicios, setServicios] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append("nombre", nombre);
    urlencoded.append("apellidos", apellidos);
    urlencoded.append("contraseña", contraseña);
    urlencoded.append("telefono", telefono);
    urlencoded.append("email", email);
    urlencoded.append("ubicacion", ubicacion);
    urlencoded.append("nombreempresa", nombreEmpresa);
    urlencoded.append("servicios", servicios);

    try {
      const response = await fetch('http://localhost:3400/api/electricistas', {
        method: 'POST',
        body: urlencoded,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Error al guardar el usuario');
      }

      setMensaje('Usuario guardado correctamente');
      setError('');
      setTimeout(() => {
        setNombre('');
        setApellidos('');
        setContraseña('');
        setTelefono('');
        setEmail('');
        setUbicacion('');
        setNombreEmpresa('');
        setServicios('');
        setMensaje('');
        onClose();
      }, 3000);
    } catch (error) {
      console.log(error);
      setMensaje('');
      setError('Error al guardar el usuario');
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 font-switzer">Rellena el siguiente formulario:</h2>
      {mensaje && <p className="text-green-600 mb-4">{mensaje}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-900 font-bold mb-2 font-switzer">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-900 font-bold mb-2 font-switzer">Apellidos</label>
          <input
            type="text"
            id="apellido"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contraseña" className="block text-gray-900 font-bold mb-2 font-switzer">contraseña</label>
          <input
            type="password"
            id="contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-900 font-bold mb-2 font-switzer">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900 font-bold mb-2 font-switzer">Email</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ubicacion" className="block text-gray-900 font-bold mb-2 font-switzer">Ubicación</label>
          <input
            type="text"
            id="ubicacion"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombreempresa" className="block text-gray-900 font-bold mb-2 font-switzer">Nombre de la empresa</label>
          <input
            type="text"
            id="nombreempresa"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="servicios" className="block text-gray-900 font-bold mb-2 font-switzer">Servicios</label>
          <textarea
            id="servicios"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            rows="10"
            value={servicios}
            onChange={(e) => setServicios(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );

}

export default Formulario;