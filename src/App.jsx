import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clientes from './components/Clientes/Clientes';
import ProyectosEstrella from './components/ProyectoEstrella/ProyectoEstrella';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clientes />
      <ProyectosEstrella />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;