import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../actions";
import PropTypes from "prop-types";
import "../styles/CarouselItem.scss";
import playIcon from "../assets/play-icon.png";
import playPlus from "../assets/plus-icon.png";

const CarouselItem = props => {
  const { cover, title, year, contentRating, duration } = props;
  
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };
  return (
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
          <img
            src={playPlus}
            alt="add"
            width="30"
            onClick={handleSetFavorite}
          ></img>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};
const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
