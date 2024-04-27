import React, { useState } from 'react';
import ElectricFinderlogo from './ElectricFinderlogo.png';
import Modal from './modal';



const Header = () => {

    const [electricistas, setElectricistas] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
    };
  

    return (
      <>
      <div className="h-16 max-w-[2500px] border px-[150px] shadow-md flex bg-neutral-100 ">
        <div className='flex-1'><img src={ElectricFinderlogo} alt="ElectricFinderlogo" className="h-14 w-auto justify-end" /></div>


        <div className="py-1 px-4 w-max-96 pt-4"><input class="border border-grey-300 rounded-lg w-full bg-slate-100" placeholder="     Buscar"></input></div>

        <div className="pt-2 pl-20">
          <button onClick={openModal} className="bg-blue-500 shadow-lg shadow-blue-500/50 border border-blue-900 rounded-lg text-white font-bold py-2 px-4">Ofrecer servicios</button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
      </>
    );
};

export default Header;