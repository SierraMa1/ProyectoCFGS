import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


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
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-50">
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
    </div>
  );
};

export default Perfil;