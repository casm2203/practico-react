import React from "react";
import "../styles/CarouselItem.scss";

const CarouselItem = () => (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="portada video"
        width="200"
      ></img>
      <div className="carousel-item__details">
        <div>
          <img src="./images/icon-play.png" alt="play" width="30"></img>
          <img src="./images/icon-plus.png" alt="add" width="30"></img>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">
            2019 16+ 144 minutos
          </p>
        </div>
      </div>
    </div>
);

export default CarouselItem;
