import React, { useContext, useEffect } from "react";
import PhotoContext from '../../context/photo/photoContext';
import Photo from '../photo/photos'

const Home = () => {

  const photoContext = useContext(PhotoContext)

  useEffect(() => {
    photoContext.healthCheck();
    photoContext.photoList();

    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
        <Photo/>
    </div>
  );
};

export default Home;
