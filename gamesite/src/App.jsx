// Em seu App.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  const [tema, setTema] = useState('claro');

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <div className="App">
      <NavBar tema={tema} setTema={setTema} />
      <main>
        {/* Conteúdo principal da sua página */}
      </main>
      <Footer tema={tema} />
    </div>
  );
}

export default App;