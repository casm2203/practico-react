import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../App.scss";
// import useInitialState from "../hooks/useInitialState";
// const API = "http://localhost:3000/initalState";

function Home({myList, trends, originals}) {
  // const InitialState = useInitialState(API);
  return (
    <>
      <Search />
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item} /* con eso agregas todo lo que contiene items*/
                myList={true}
              />
            ))}
          </Carousel>
        </Categories>
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem
              key={item.id}
              {...item} /* con eso agregas todo lo que contiene items*/
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {originals.map(item => (
            <CarouselItem
              key={item.id}
              {...item} /* con eso agregas todo lo que contiene items*/
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
}
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
};

export default connect(mapStateToProps, null)(Home);
