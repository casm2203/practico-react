import React from "react";
import "../styles/Categories.css";

const Categories = ({children}) => (
  <div className="categories">
    <h3 class="categories__title">Mi lista</h3>
    {children}
  </div>
);

export default Categories;
