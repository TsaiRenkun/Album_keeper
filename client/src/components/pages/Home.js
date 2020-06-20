import React, { useContext, useEffect } from "react";
import PhotoContext from '../../context/photo/photoContext';

const Home = () => {

  const photoContext = useContext(PhotoContext)

  useEffect(() => {
    photoContext.healthCheck();
    photoContext.photoList();

    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
        HOME PAGE
    </div>
  );
};

export default Home;
