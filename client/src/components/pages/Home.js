import React, { useContext, useEffect } from "react";
import PhotoContext from "../../context/photo/photoContext";
import Photo from "../photo/photos";
import PhotoFilter from "../photo/photoFilter";
import PhotoForm from "../photo/photoForm";

const Home = () => {
  const photoContext = useContext(PhotoContext);

  useEffect(() => {
    photoContext.healthCheck();
    photoContext.photoList();

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="grid-2">
        <div>
          <PhotoForm />
        </div>
        <div> RIGHT SIDE </div>
      </div>
      <PhotoFilter />
      <div>
        <Photo />
      </div>
    </div>
  );
};

export default Home;
