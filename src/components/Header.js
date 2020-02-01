import React from "react";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { connect } from "react-redux";
import { logoutRequest } from "../actions/index";
import "../styles/Header.scss";
import logo from "../assets/logo-platzi-video-BW2.png";
import userIcon from "../assets/user-icon.png";

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogo = () => {
    props.logoutRequest({})
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video"></img>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt=""></img>
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? 
            <li>
              <a href="/">{user.name}</a>
            </li>
           : null}
          {hasUser ? 
            <li>
              <a href="#logout" onClick={handleLogo}>
                Cerrar Sesión
              </a>
            </li>
           : 
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          }
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
const marpDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, marpDispatchToProps)(Header);
