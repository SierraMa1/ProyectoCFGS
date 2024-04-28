import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './header';
import Electricista from './electricista';
import Profile from './profile';
import Valoraciones from './valoraciones';
import Perfil from './perfil';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
        </Route>
        <Route path="electricista/:user" element={<Electricista />} />
        <Route path="profile" element={<Profile />} />
        <Route path="valoraciones" element={<Valoraciones />} />
        <Route path="electricista/perfil/:id" element={<Perfil tipo="electricista"/>} />
        <Route path="cliente/perfil/:id" element={<Perfil tipo="cliente"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;