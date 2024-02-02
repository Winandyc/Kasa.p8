import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404/Error404';
import Accommodation from './pages/Accommodation';

/*
 * @brief : Composant App qui représente l'application principale avec la logique de routage.
 * @component
 * @returns {JSX.Element} Le composant App rendu.
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
