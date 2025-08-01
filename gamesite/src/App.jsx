import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar'
import Registro from './Paginas/Registro'
import Login from './Paginas/Login'
import RecuperarConta from './Paginas/RecuperarConta'
import Conta from './Paginas/Conta'
import Principal from './Paginas/Principal'
import Populares from './Paginas/Populares'
import Administrador from './Paginas/Administrador'
import Jogo from './Paginas/Jogo'
import Carrinho from './Paginas/Carrinho'

const App = () => {
  const [tema, setTema] = useState('claro')

  return (
    <Router>
      <div className={`container ${tema}`}>
        <NavBar tema={tema} setTema={setTema} />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-conta" element={<RecuperarConta />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/admin" element={<Administrador />} />
          <Route path="/jogo/:id" element={<Jogo />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
