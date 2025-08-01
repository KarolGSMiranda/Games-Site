import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import lupabranca from '../../assets/lupa-w.png'
import lupapreta from '../../assets/lupa-b.png'
import lua from '../../assets/lua.png'
import sol from '../../assets/sol.png'
import Conta from './Paginas/Conta'
import Populares from './Paginas/Populares'

const NavBar = ({ tema, setTema }) => {
  const mudar_tema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro')
  }

  return (

    <div className={`navbar ${tema === 'escuro' ? 'escuro' : ''}`}>

      <img src={logo} alt="Logo" className='logo' />

      <ul>
        <li>Lançamentos</li>
        <li><Link to="/populares">Populares</Link></li>
        <li>Gênero</li>
        <li>Promoções</li>
        <li><Link to="/conta">Minha Conta</Link></li>
      </ul>

      <div className='caixa-pesquisa'>
        <input type="text" placeholder='Pesquisar' />
        <img src={tema === 'claro' ? lupapreta : lupabranca} alt="Lupa" />
      </div>

      <img
        onClick={mudar_tema}
        src={tema === 'claro' ? lua : sol}
        alt="Tema"
        className='tema'
      />
    </div>
  )
}

export default NavBar
