import { useState, useEffect } from "react";

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
      // eslint-disable-next-line
  }, []);
  
  return videos;
};

export default useInitialState;
