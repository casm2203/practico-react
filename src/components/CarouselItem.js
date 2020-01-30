import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import PropTypes from "prop-types";
import "../styles/CarouselItem.scss";
import playIcon from "../assets/play-icon.png";
import playPlus from "../assets/plus-icon.png";
import removeIcon from "../assets/remove-icon.png";

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };
  const handleDeleteFavorite = id => {
    props.deleteFavorite(id);
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
          {!props.myList && (
            <img
              src={playPlus}
              alt="add"
              width="30"
              onClick={handleSetFavorite}
            ></img>
          )}
          {props.myList && (
            <img
              src={removeIcon}
              alt="remove"
              width="30"
              onClick={() => handleDeleteFavorite(id)}
            />
          )}
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
  deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
