import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/telefone.png';
import locationIcon from '../../assets/localizacao.png';

const Footer = ({ tema }) => {
  return (
    <footer className={`footer-container ${tema === 'escuro' ? 'escuro' : ''}`}>
      <div className="footer-content-wrapper">
        <div className="footer-desktop-content">
          <div className="footer-section logo-section">
            <img src={logo} alt="Logo Game Dame" className="footer-logo" />
            <div className="footer-text">
              <h2 className="footer-title">Game Dame</h2>
              <p className="footer-subtitle">Seu próximo o jogo começa aqui</p>
            </div>
          </div>

          <div className="footer-section links-section">
            <h3 className="footer-section-title">Explorar</h3>
            <ul className="footer-links-list">
              <li>Início</li>
              <li>Populares</li>
              <li>Conta</li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h3 className="footer-section-title">Contato</h3>
            <div className="footer-contact-item">
              <img src={emailIcon} alt="Ícone de E-mail" className="footer-contact-icon" />
              <p className="footer-contact-text">gamegamedame@teste.com</p>
            </div>
            <div className="footer-contact-item">
              <img src={phoneIcon} alt="Ícone de Telefone" className="footer-contact-icon" />
              <p className="footer-contact-text">(99) 9 9999-9999</p>
            </div>
            <div className="footer-contact-item">
              <img src={locationIcon} alt="Ícone de Localização" className="footer-contact-icon" />
              <p className="footer-contact-text">Shopping X, Lavras - MG</p>
            </div>
          </div>
        </div>

        <div className="footer-mobile-content">
          <div className="footer-mobile-info">
            <img src={logo} alt="Logo Game Dame" className="footer-logo-mobile" />
            <div className="footer-mobile-contact-details">
              <div className="footer-contact-item-mobile">
                <img src={emailIcon} alt="Ícone de E-mail" className="footer-contact-icon-mobile" />
                <p className="footer-contact-text-mobile">gamegamedame@teste.com</p>
              </div>
              <div className="footer-contact-item-mobile">
                <img src={phoneIcon} alt="Ícone de Telefone" className="footer-contact-icon-mobile" />
                <p className="footer-contact-text-mobile">(99) 9 9999-9999</p>
              </div>
              <div className="footer-contact-item-mobile">
                <img src={locationIcon} alt="Ícone de Localização" className="footer-contact-icon-mobile" />
                <p className="footer-contact-text-mobile">Shopping X, Lavras - MG</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">2024 Game Dame | By Emakers Júnior</p>
      </div>
    </footer>
  );
};

export default Footer;