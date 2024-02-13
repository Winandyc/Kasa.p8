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
        <Route path="*" element={<Error404 />} />   {/*   * = n'importe quelle URL, "attrape tout"   */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;













// J'ai utilisé la bibliothèque react-router-dom pour initialiser les routes de mon application. Dans mon composant App, j'ai
// enveloppé l'ensemble de mes routes avec le composant BrowserRouter, qui fournit un contexte de navigation à mes routes. Ensuite,
// j'ai utilisé le composant Routes pour définir mes routes individuelles. Pour chaque route, j'ai spécifié un chemin et le composant
// à afficher lorsque ce chemin est atteint.
