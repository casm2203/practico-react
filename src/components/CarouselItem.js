import React from "react";
import PropTypes from 'prop-types';
import "../styles/CarouselItem.scss";
import playIcon from '../assets/play-icon.png'
import playPlus from '../assets/plus-icon.png'

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={cover}
        alt={title}
        width="200"
      ></img>
      <div className="carousel-item__details">
        <div>
          <img src={playIcon} alt="play" width="30"></img>
          <img src={playPlus} alt="add" width="30"></img>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;
