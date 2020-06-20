import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import PhotoContext from "../../context/photo/photoContext";
import PhotoItem from "./photoItem"


const Photo = () => {
    const photoContext = useContext(PhotoContext);

    const { photos , photoList, loading } = photoContext;

    useEffect(() => {
        photoList();
        //eslint-disable-next-line
      }, []);

    if(loading){
      return <Spinner/>
  } else {
      return (
          <div style={photoStyle}>
              {photos.map((photo) => (
                  <PhotoItem key ={photo.id} photo = {photo}/>
              ))}
          </div>
      )
  }
}

const photoStyle ={ 
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Photo