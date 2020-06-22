import React, { Fragment, useEffect, useContext, useState } from "react";
import Spinner from "../layout/Spinner";
import PhotoContext from "../../context/photo/photoContext";
import PhotoItem from "./photoItem";
import Pagination from "../pagination";

const Photo = () => {
  const photoContext = useContext(PhotoContext);

  const { photos, photoList, loading, filtered } = photoContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [photoPerPage] = useState(12);

  useEffect(() => {
    photoList();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    //Get Current photo

    if (filtered !== null) {
      const indexOfLastPhoto = currentPage * photoPerPage;
      const indexOfFirstPhoto = indexOfLastPhoto - photoPerPage;
      var currentFiltered = filtered.slice(indexOfFirstPhoto, indexOfLastPhoto);
    } else {
      const indexOfLastPhoto = currentPage * photoPerPage;
      const indexOfFirstPhoto = indexOfLastPhoto - photoPerPage;
      var currentPhoto = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    }
    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(photos);
    return (
      <Fragment>
        {filtered !== null ? (
          <div>
            <div style={photoStyle}>
              {currentFiltered.map((photo) => (
                <PhotoItem key={photo.id} photo={photo} />
              ))}
            </div>
            <Pagination
              photoPerPage={photoPerPage}
              totalPhotos={filtered.length}
              paginate={paginate}
            />
          </div>
        ) : (
          <div>
            <div style={photoStyle}>
              {currentPhoto.map((photo) => (
                <PhotoItem key={photo.id} photo={photo} />
              ))}
            </div>
            <Pagination
              photoPerPage={photoPerPage}
              totalPhotos={photos.length}
              paginate={paginate}
            />
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
