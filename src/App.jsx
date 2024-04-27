import React, { useState, useEffect } from 'react';
import Profile from "./profile";
import Header from "./header";

const App = () => {

  const [ electricistas, setElectricistas ] = useState([])
  // const [ valoraciones, setValoraciones ] = useState([])
  // const { user } = useParams();

  useEffect(() => {
    fetch('http://localhost:3400/api/electricistas')
      .then((response) => {
        return response.json()
      })
      .then((electricistas) => {
        setElectricistas(electricistas)
        // setValoraciones(electricista.valoraciones)
      })
  }, [])

  console.log(electricistas);
  return (
    <>
    <Header />
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap">
        {electricistas.map((electricista) => (
          <a key={electricista.id} href={`/perfil/${electricista.id}`} className="max-w-full sm:max-w-1/2 lg:max-w-1/3 p-4">
            <Profile electricista={electricista} />
          </a>
        ))}
      </div>
    </div>
    </> 
  );
};
export default App;
