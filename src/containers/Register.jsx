import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.scss";

const Register = () => {
  const [form, setValue] = useState({
    email: "",
    name: "",
    password: ""
  });
  // funcion con la cual escucha los cambios de los inputs, los agrega al estado con el set y se idenfica el campo por medio el atributo name 
  const handleInput = event => {
    setValue({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(form)
  }
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input name="name" className="input" type="text" placeholder="Nombre" onChange={handleInput} />
          <input name="email" className="input" type="text" placeholder="Correo" onChange={handleInput} />
          <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput} />
          <button className="button">Registrarme</button>
        </form>
        <Link className="link" to="/login">
          Iniciar sesión
        </Link>
      </section>
    </section>
  );
};

export default Register;
