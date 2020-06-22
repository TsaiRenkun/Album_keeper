import React, { useContext,useState } from "react";
import PhotoContext from "../../context/photo/photoContext";

const UploadLists = (list) => {

  const photoContext = useContext(PhotoContext);

  const { addPhoto, uploaded, uploadList } = photoContext;

  const [photo, setPhoto] = useState({
    album: "",
    document: null,
  });

  const onSubmitone = (e) => {
    e.preventDefault();
    uploadList(e.target.document.files[0]);
    clearForm();
  };

  const clearForm = () => {
    setPhoto({
      document: null,
    });
  };
  const onChange = (e) => {
    setPhoto({
      ...photo,
      [e.target.name]: e.target.value,
    });
  };

    const photos = list.list

  return (
    <div>
          <div className="container">
        <div className="row">
          <form onSubmit={onSubmitone}>
            <h3>Choose Your Multiple File Upload</h3>
            <div className="form-group">
              <input type="file" name="document" accept="image/*" onChange={onChange} multiple required />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
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

export default UploadLists;
