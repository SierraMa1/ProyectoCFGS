import React from 'react';
import Header from './header'; // Asegúrate de importar el componente Header
import StarRating from './starRating'; // Componente de estrellas (puedes implementarlo o usar uno existente)

const Profile = ({ electricista }) => {

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={`images/imagenesElectricistas/${electricista.id}.jpg`} alt={`${electricista.nombre} ${electricista.apellido}`} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 font-switzer ">{electricista.nombre} {electricista.apellido}</h2>
            <p className="text-gray-900 mb-4 font-chillax">{electricista.ubicacion}</p>
            <p className="text-gray-900 mb-4 font-chillax">{electricista.servicios}</p>
            <div className="flex items-center">
              <span className="mr-2 text-lg text-gray-900 font-chillax">{electricista.promedio_puntuacion ? 'Valoración Promedio:' : 'Este electricista aún no tiene reseñas'}</span>
              {electricista.promedio_puntuacion && <StarRating rating={electricista.promedio_puntuacion} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;