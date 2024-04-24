import React from "react";

const App = () => {
  return (
    <>
    
      <div className="h-16 max-w-[1440px] border px-[150px] shadow-md grid grid-cols-3 ">
       
        <div className="pt-2 py-8"><p className=" font-switzer text-blue-500 text-3xl font-bold">ElectroFinder</p></div>
        <div className="py-1 px-4 w-full pt-4"><input class="border border-grey-300 rounded-lg w-full bg-slate-100" placeholder="     Buscar"></input></div>
        
        <div className="pt-2 pl-20"><button className="bg-blue-500 shadow-lg shadow-blue-500/50 border border-blue-900 rounded-lg text-white font-bold py-2 px-4">Ofrecer servicios</button></div>
        </div>
      <div className="grid h-screen max-w-[1440px] grid-cols-3 gap-[30px] px-[150px]">
        <div className="gap-4 py-8 ">
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md ">
            <p className=" pt-4 font-chillax font-bold">Luca Lombardi</p>
            <p className=" pt-1 font-chillax text-gray-500">Málaga</p>
            <br/>
            <p className=" pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Manuel Dueñas Fernandez</p>
            <p className="pt-1 font-chillax text-gray-500">Extremadura</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Cristina Gonzalez Jimenez</p>
            <p className="pt-1 font-chillax text-gray-500">Madrid</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Antonio Torronteras Fernandez</p>
            <p className="pt-1 font-chillax text-gray-500">Guadalajara</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
        </div>
        <div className="gap-4 py-8 ">
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Carlos Delgado Navalón</p>
            <p className="pt-1 font-chillax text-gray-500">Toledo</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md ">
            <p className="pt-4 font-chillax font-bold">Rubén Rubio Carmona </p>
            <p className="pt-1 font-chillax text-gray-500">Málaga</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Luis López Sánchez</p>
            <p className="pt-1 font-chillax text-gray-500">Jaén</p>
            <br/>
            <p className="pt-4 text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md ">
            <p className="pt-4 font-chillax font-bold">Carmen Sierra Díaz</p>
            <p className="pt-1 font-chillax text-gray-500">Madrid</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
        </div>
        <div className="gap-4 py-8">
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Pedro Torres Domínguez</p>
            <p className="pt-1 font-chillax text-gray-500">Cuenca</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Francisco Rodríguez Álvarez</p>
            <p className="pt-1 font-chillax text-gray-500">Segovia</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Carlos Moreno Hernández
 </p>
            <p className="pt-1 font-chillax text-gray-500">Sevilla</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
          <div className="py-4 px-4 my-4 rounded-xl border shadow-md">
            <p className="pt-4 font-chillax font-bold">Enrique Fernández Gómez</p>
            <p className="pt-1 font-chillax text-gray-500">Barcelona</p>
            <br/>
            <p className="pt-4 font-chillax text-gray-900">Otros servicios....</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
