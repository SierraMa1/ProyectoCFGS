import React, { useState, useEffect } from 'react';
import Profile from "./profile";
import Header from "./header";

const App = () => {

  const [electricistas, setElectricistas] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const filteredElectricistas = electricistas.filter((electricista) =>
    electricista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    electricista.ubicacion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch('http://localhost:3400/api/electricistas')
      .then((response) => {
        return response.json()
      })
      .then((electricistas) => {
        setElectricistas(electricistas)
      })
  }, [])

  console.log(electricistas);
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap">
          {filteredElectricistas.map((electricista) => (
            <div key={electricista.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <a href={`/perfil/${electricista.id}`}>
                <Profile electricista={electricista} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
