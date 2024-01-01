// IMPORTS
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

//PAGES
import About from '../../pages/about/about.jsx'
import Error from '../../pages/error/error.jsx'
import Location from '../../pages/location/location.jsx'
import Home from '../../pages/home/home.jsx'

// LAYOUTS
import Header from '../../layouts/Header/header.jsx'
import Footer from '../../layouts/Footer/footer.jsx'

// STYLES
import './App.css'


// Routes de l'application
function App() {
    return (
        <BrowserRouter> {/* Envelopper l'application avec BrowserRouter */}

            <div className='Container'>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/location/:id" element={<Location />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>

            </div>
            <Footer />

        </BrowserRouter>
    )
}

export default App;
