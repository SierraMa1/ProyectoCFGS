import React from 'react';
import Header from './header'; // Asegúrate de importar el componente Header
import StarRating from './starRating'; // Componente de estrellas (puedes implementarlo o usar uno existente)

const Profile = ( {electricista} ) => {

  return (
    <>
      {/* <Header /> Asegúrate de que el componente Header esté presente */}
      {/* Contenido del perfil del electricista */}
      <div className="container mx-auto mt-8">
        {/* Información del electricista */}
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Foto del electricista */}
          <img src={`images/imagenesElectricistas/${electricista.id}.jpg`} alt={`${electricista.nombre} ${electricista.apellido}`} className="w-full h-64 object-cover" />
          {/* Detalles del electricista */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 font-switzer ">{electricista.nombre} {electricista.apellido}</h2>
            <p className="text-gray-900 mb-4 font-chillax">{electricista.ubicacion}</p>
            <p className="text-gray-900 mb-4 font-chillax">{electricista.servicios}</p>
            {/* Componente de estrellas para mostrar la valoración promedio */}
            <div className="flex items-center">
              <span className="mr-2 text-lg text-gray-900 font-chillax">Valoración Promedio:</span>
              <StarRating rating={electricista.promedio_puntuacion} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;