import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setapellidos] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, settelefono] = useState('');
  const [email, setEmail] = useState('');
  const [ubicacion, setubicacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombreempresa, setnombreempresa] = useState('');
  const [servicios, setServicios] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append("nombre", nombre)
    urlencoded.append("apellidos", apellidos)
    urlencoded.append("contraseña", contraseña)
    urlencoded.append("telefono", telefono)
    urlencoded.append("email", email)
    urlencoded.append("ubicacion", ubicacion)
    urlencoded.append("nombreempresa", nombreempresa)
    urlencoded.append("servicios", servicios)
    addPost(urlencoded);
  }

  const addPost = async (dataPost) => {
    console.log(JSON.stringify({dataPost}));
    let response = await fetch('http://localhost:3400/api/electricistas', {
         method: 'POST',
         body: dataPost,
         headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
         },
      });
      let data = await response.json();
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 font-switzer">Rellena el siguiente formulario:</h2>
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
            onChange={(e) => setapellidos(e.target.value)}
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
            onChange={(e) => settelefono(e.target.value)}
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
            onChange={(e) => setubicacion(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombreempresa" className="block text-gray-900 font-bold mb-2 font-switzer">Nombre de la empresa</label>
          <input
            type="text"
            id="nombreempresa"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            value={nombreempresa}
            onChange={(e) => setnombreempresa(e.target.value)}
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
};

export default Formulario;