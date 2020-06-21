import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PhotoContext from "../../context/photo/photoContext";

const PhotoItem = ({ photo: { id, album, name, path, raw } }) => {
  
  const newRaw = raw.split("").splice(7).join("");

  const photoContext = useContext(PhotoContext);

  const { deletePhoto } = photoContext;

  const onDelete = () => {
    deletePhoto(album, name, id);
  };

  return (
    <div className="card text-center">
      <img src={newRaw} alt={id} style={{ width: "200px", height: "200px" }} />
      <h3>{album}</h3>
      <h4>{name}</h4>
      <div>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
PhotoItem.proptype = {
  photo: PropTypes.object.isRequired,
};
export default PhotoItem;
