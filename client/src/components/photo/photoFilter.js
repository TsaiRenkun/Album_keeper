import React, { useContext, useRef, useEffect } from "react";
import PhotoContext from "../../context/photo/photoContext";

const PhotoFilter = () => {
  const photoContext = useContext(PhotoContext);
  const text = useRef("");

  const { filterPhoto, clearFilter, filtered } = photoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      console.log(e.target.value)
      filterPhoto(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Photos..."
        onChange={onChange}
      />
    </form>
  );
};

export default PhotoFilter;
