import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  const [tema, setTema] = useState('claro')

  return (
    <div className={`container ${tema}`}>
      <NavBar tema={tema} setTema={setTema} />
    </div>
  )
}

export default App
