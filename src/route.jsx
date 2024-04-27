import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './header';
import Perfil from './perfil'; // Importa el componente PerfilPage
import Profile from './profile';
import Valoraciones from './valoraciones';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
        </Route>
        <Route path="perfil/:user" element={<Perfil />} />
        <Route path="profile" element={<Profile />} />
        <Route path="valoraciones" element={<Valoraciones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;