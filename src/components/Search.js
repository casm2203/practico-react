import React from "react";
import '../styles/Search.scss'

const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder="Buscar..."></input>
  </section>
);

export default Search;
