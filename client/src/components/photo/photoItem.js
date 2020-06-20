import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhotoItem = ({ photo: { id, album, name, path, raw } }) => {
    console.log(raw)
    const newRaw = raw.split('').splice(7).join('')

  return (
    <div className="card text-center">
      <img
        src={newRaw}
        alt={id}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{album}</h3>
      <h4>{name}</h4>
      <div>
        {/* <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link> */}
      </div>
    </div>
  );
};
PhotoItem.proptype = {
  photo: PropTypes.object.isRequired,
};
export default PhotoItem;
