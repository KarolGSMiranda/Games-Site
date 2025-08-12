import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import lupabranca from '../../assets/lupa-w.png'
import lupapreta from '../../assets/lupa-b.png'
import lua from '../../assets/lua.png'
import sol from '../../assets/sol.png'

const NavBar = ({ tema, setTema }) => {
  const [menuAtivo, setMenuAtivo] = useState(false)

  const mudar_tema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro')
  }

  const alternarMenu = () => {
    setMenuAtivo(!menuAtivo)
  }

  return (
    <div className={`navbar ${tema === 'escuro' ? 'escuro' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      <ul className="desktop-menu">
        <li>Lançamentos</li>
        <li>Populares</li>
        <li>Gênero</li>
        <li>Promoções</li>
        <li>Conta</li>
      </ul>

      <div className="caixa-pesquisa desktop-pesquisa">
        <input type="text" placeholder="Pesquisar" />
        <img src={tema === 'claro' ? lupapreta : lupabranca} alt="Lupa" />
      </div>

      <img
        onClick={mudar_tema}
        src={tema === 'claro' ? lua : sol}
        alt="Tema"
        className="tema-desktop"
      />

      <div
        className={`mobile-menu ${menuAtivo ? 'active' : ''}`}
        onClick={alternarMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={`nav-list ${menuAtivo ? 'active' : ''}`}>
        <div className="icone-fechar" onClick={alternarMenu}>
          &times;
        </div>

        <div className="menu-mobile-conteudo">
          <ul>
            <li>Lançamentos</li>
            <li>Populares</li>
            <li>Gênero</li>
            <li>Promoções</li>
            <li>Conta</li>
          </ul>

          <div className="caixa-pesquisa">
            <input type="text" placeholder="Pesquisar" />
            <img src={tema === 'claro' ? lupapreta : lupabranca} alt="Lupa" />
          </div>

          <img
            onClick={mudar_tema}
            src={tema === 'claro' ? lua : sol}
            alt="Tema"
            className="tema-mobile"
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
