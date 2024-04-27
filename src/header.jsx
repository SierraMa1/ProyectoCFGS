import React, { useState } from 'react';
import ElectricFinderlogo from './ElectricFinderlogo.png';
import Modal from './modal';
import { Link } from 'react-router-dom';
import ModalInicioSesion from './modalInicioSesion';



const Header = ({searchTerm, setSearchTerm}) => {

  const [electricistas, setElectricistas] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInicio, setIsOpenInicio] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeInicio = () => {
    setIsOpenInicio(false);
  };

  const openInicio = () => {
    setIsOpenInicio(true);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="h-16 max-w-[2500px] border px-[2rem] md:px-[6rem] shadow-md flex bg-neutral-100 items-center justify-between">

      {/* Logo con enlace a la página principal */}
      <Link to="/" className="flex-1">
        <img src={ElectricFinderlogo} alt="ElectricFinderlogo" className="h-14 w-auto" />
      </Link>

      {/* Barra de búsqueda */}
      <div className='py-1 px-4 md:w-[20rem] w-64'>
        <input
          className="border border-grey-300 rounded-lg w-full bg-slate-100 focus:outline-none px-2 py-1"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Botón de menú para dispositivos móviles */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-900 font-bold text-xl focus:outline-none">
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {/* Botones de acción y enlaces */}
      <div className="hidden md:flex items-center space-x-4">

        {/* Botón de ofrecer servicios */}
        <button onClick={openModal} className="bg-blue-500 shadow-lg shadow-blue-500/50 border border-blue-900 rounded-lg text-white font-bold py-2 px-4">Ofrecer servicios</button>

        {/* Enlace a la página de valoraciones */}
        <Link to="/valoraciones" className="text-gray-900 font-semibold text-lg hover:underline">Valoraciones</Link>

        {/* Botón de inicio de sesión */}
        <button onClick={openInicio} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Iniciar sesión</button>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white w-48 mt-2 shadow-lg rounded-lg">
          <Link to="/valoraciones" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Valoraciones</Link>
          <button onClick={openModal} className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Ofrecer servicios</button>
          <button onClick={openInicio} className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Iniciar sesión</button>
        </div>
      )}
    </div>
    <Modal isOpen={isOpen} onClose={closeModal}/>
    <ModalInicioSesion isOpen={isOpenInicio} onClose={closeInicio}/>
    </>
  );
};

export default Header;