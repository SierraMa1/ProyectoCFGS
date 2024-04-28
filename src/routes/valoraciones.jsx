import { useEffect, useState } from "react";
import React from 'react';
import Header from "../components/header";
import StarRating from "../components/starRating";

const Valoraciones = () => {
    const [ electricista, setElectricista ] = useState([])
    const [ valoraciones, setValoraciones ] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const filteredValoraciones = valoraciones.filter((valoracion) =>
        valoracion.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        valoracion.ubicacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        valoracion.usuario.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    useEffect(() => {
        fetch(`http://localhost:3400/api/valoraciones`)
        .then((response) => {
            return response.json()
        })
        .then((valoraciones) => {
            setValoraciones(valoraciones)
        })
    }, [])

    if (!valoraciones) return null;
    return (
        <>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="container mx-auto mt-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Valoraciones de Usuarios</h1>
            {filteredValoraciones.map((valoracion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-4">
                {/* Datos del electricista */}
                <div className="mb-4">
                <h2 className="text-2xl font-bold">{valoracion.nombre} {valoracion.apellidos}</h2>
                <p className="text-gray-700">{valoracion.ubicacion}</p>
                </div>
                {/* Valoración */}
                <div className="mb-4">
                <p className="text-lg text-gray-900">Valoración: {valoracion.comentario}</p>
                <StarRating rating={valoracion.puntuacion} />
                </div>
                {/* Usuario y ubicación */}
                <div>
                <p className="text-lg text-gray-900">Usuario: {valoracion.usuario}</p>
                <p className="text-gray-700">Ubicación: {valoracion.ubicacion_usuario}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        </>
    );
}

export default Valoraciones;