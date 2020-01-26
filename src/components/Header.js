import React from "react";
import '../styles/Header.scss'
import logo from '../assets/logo-platzi-video-BW2.png'
import userIcon from '../assets/user-icon.png'

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src={logo}
      alt="Platzi Video"
    ></img>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt=""></img><p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
