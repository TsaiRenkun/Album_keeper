import React from "react";

const uploadLists = (list) => {

    const photos = list.list

  return (
    <div>
      {photos.length !== 0
          ? photos.map((photo, i) => (
              <p key = {i}> {photo.name}</p>
            ))
          : <p>
            Upload a photo
            </p>}
    </div>
  );
};

export default uploadLists;
