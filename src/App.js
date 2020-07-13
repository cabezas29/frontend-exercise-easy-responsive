import React from 'react';
import Header from './components/Header'
import Databook from './components/Databook'
import Prueba from './components/Prueba'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="book">
        <Databook />
        <Prueba />
      </div>
    </div>
  );
}

export default App;
