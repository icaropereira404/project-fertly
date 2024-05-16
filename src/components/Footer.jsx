import React from 'react'
import Logo from '../assets/logo.svg' // Certifique-se de ajustar o caminho da logo
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_column}>
        <img src={Logo} alt="Logo" className={style.footer_logo}/>
        <p>Copyright © 2024 Fertly</p>
        <p>Todos os direitos reservados</p>
      </div>
      <div className={style.footer_logo}>
        <h3>Seções</h3>
        <p>Minha conta</p>
      </div>
      <div className={style.footer_logo}>
        <h3>Suporte</h3>
        <p>Termos de uso</p>
        <p>Ajuda</p>
      </div>
      <div className={style.footer_logo}>
        <h3>Siga Fertly</h3>
        <div className={style.social_icons}>
          <a href=""><FaFacebook /></a>
          <a href=""><FaYoutube /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
