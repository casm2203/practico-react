import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../App.scss";
import useInitialState from "../hooks/useInitialState";
const API = "http://localhost:3000/initalState";

function Home () {
  const InitialState = useInitialState(API);
  return (
    <>
      <Search />
      {InitialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
          {InitialState.mylist.map(item => (
            <CarouselItem
              key={item.id}
              {...item} /* con eso agregas todo lo que contiene itemas*/
            />
          ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {InitialState.trends.map(item => (
            <CarouselItem
              key={item.id}
              {...item} /* con eso agregas todo lo que contiene itemas*/
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {InitialState.originals.map(item => (
            <CarouselItem
              key={item.id}
              {...item} /* con eso agregas todo lo que contiene itemas*/
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
}

export default Home;
