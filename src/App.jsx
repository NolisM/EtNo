import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: '2000px', paddingTop: '100px', backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h1 className="display-4 text-primary">Portfolio de Etno Digital</h1>
          <p className="lead">¡Bienvenido! El Header ya está funcionando y es responsive.</p>
        </div>
      </div>
    </div>
  );
}

export default App;