import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import PhotoContext from "../../context/photo/photoContext";
import PhotoItem from "./photoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Photo = () => {
  const photoContext = useContext(PhotoContext);

  const { photos, photoList, loading, filtered } = photoContext;

  useEffect(() => {
    photoList();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {filtered !== null ? (
          <div style={photoStyle}>
            {filtered.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
            ))}
          </div>
        ) : (
          <div style={photoStyle}>
            {photos.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
};

const photoStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Photo;
