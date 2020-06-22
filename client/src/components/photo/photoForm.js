import React, { useState, useContext, useEffect } from "react";
import PhotoContext from "../../context/photo/photoContext";

const ContactForm = () => {
  const photoContext = useContext(PhotoContext);

  const { addPhoto, uploaded, uploadList } = photoContext;

  useEffect(() => {}, []);

  const [photo, setPhoto] = useState({
    album: "",
    document: null,
  });

  const onChange = (e) => {
    setPhoto({
      ...photo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    addPhoto(album, uploaded);
    clearForm();
  };

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
  const { album } = photo;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text=primary">Add Photos</h2>
        <label>
          Pick you Album:
          <select name="album" value= {album} onChange={onChange}>
            <option value="Personal" >Personal</option>
            <option value="Food" >Food</option>
            <option value="Nature" >Nature</option>
            <option value="Travel" >Travel</option>
            <option value="Other" >Other</option>
          </select>
        </label>
        <input
          type="submit"
          value="Add Photo"
          className="btn btn-primary btn-block"
        />
      </form>
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
    </div>
  );
};

export default ContactForm;
