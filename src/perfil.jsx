import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from './header';
import StarRating from './starRating';


const Perfil = () => {

  const [ electricista, setElectricista ] = useState([])
  const [ valoraciones, setValoraciones ] = useState([])
  const { user } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3400/api/electricistas/${user}`)
      .then((response) => {
        return response.json()
      })
      .then((electricista) => {
        setElectricista(electricista.data)
        setValoraciones(electricista.valoraciones)
      })
  }, [user])

  if (!electricista) return null;

  return (
    <>
    <Header />
    {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-50">
      <img src="" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      <div className="absolute inset-0  bg-center "></div>
      <div className="relative bg-neutral-100 px-10 pb-8 pt-10 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-5 max-w-md">
          <div className="flex flex-row">
            <img src={`images/imagenesElectricistas/${electricista.id}.jpg`} className="h-32 w-42 rounded-full" alt="Nombre empresa" />
            <div className="divide-y divide-gray-400">
              <div className="pt-5 text-base font-semibold leading-9">
                <div className="flex flex-row">
                  <div className="basis-1/3 font-chillax">{electricista.nombre}</div>
                  <div className="basis-1/3 font-chillax">{electricista.apellido}</div>
                  <div className="basis-1/3 font-chillax">{electricista.ubicacion}</div>
                </div>
                <p className="text-gray-900 font-chillax">Valoraciones</p>
                <table>
                  <tr>
                    <th>Comentario</th>
                    <th>Puntuacion</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                  </tr>
                  {valoraciones.map((valoracion) => {
                    return (
                      <tr>
                        <td>{valoracion.comentario}</td>
                        <td>{valoracion.puntuacion}</td>
                        <td>{valoracion.nombre}</td>
                        <td>{valoracion.apellido}</td>
                      </tr>
                    )
                  })}
                  </table>
              </div>
              <div className="space-y-10 py-6 leading-9 text-gray-900">
                <div className="flex flex-row justify-start items-center h-screen">
                  <img src="https://www.tecsaqro.com.mx/wp-content/uploads/2022/09/electricista_como_profesion.jpg" alt="Placeholder" className="  rounded-s-md h-20 w-20 object-cover " />
                  <img src="https://www.tecsaqro.com.mx/wp-content/uploads/2022/09/electricista_como_profesion.jpg" alt="Placeholder" className="rounded-md h-20 w-20 object-cover " />
                </div>
              </div>
              <div className=" divide-gray-200">
              </div>
              <p className="font-semibold">Comentarios</p>
              <a>Excelente </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
       <div className="container mx-auto mt-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Foto del electricista */}
              <div className="lg:w-1/3">
                <img src={`../images/imagenesElectricistas/${electricista.id}.jpg`} alt={`${electricista.nombre} ${electricista.apellido}`} className="w-full h-auto lg:h-64 object-cover" />
              </div>
              {/* Información del electricista */}
              <div className="lg:w-2/3 p-6">
                <h2 className="text-3xl font-bold mb-2">{electricista.nombre} {electricista.apellido}</h2>
                <p className="text-gray-700 mb-4">{electricista.ubicacion}</p>
                <p className="text-gray-700 mb-4">{electricista.servicios}</p>
                <div className="flex items-center">
                  <span className="text-lg text-gray-900 mr-2">Valoración Promedio:</span>
                  {electricista.promedio_puntuacion && <StarRating rating={electricista.promedio_puntuacion} />}
                </div>
                <p className="text-gray-700 mt-4">{electricista.descripcion}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Contactar</button>
              </div>
            </div>
          </div>
        
      {/* Sección de valoraciones */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Valoraciones de Usuarios</h3>
        {valoraciones.map((valoracion, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <p className="text-gray-700 mb-1">Usuario: {valoracion.nombre}</p>
            <p className="text-gray-700 mb-1">Ubicación: {valoracion.ubicacion}</p>
            <StarRating rating={valoracion.puntuacion} />
            <p className="text-gray-700 mt-2">{valoracion.comentario}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Perfil;