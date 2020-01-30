import React from "react";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { connect } from "react-redux";
import "../styles/Header.scss";
import logo from "../assets/logo-platzi-video-BW2.png";
import userIcon from "../assets/user-icon.png";


const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video"></img>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? 
          <img src={gravatar(user.email)} alt={user.email} /> :
          <img src={userIcon} alt=""></img>
          }
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <Link to="/login">Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Header);
