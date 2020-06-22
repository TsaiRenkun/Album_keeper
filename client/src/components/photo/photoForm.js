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
    addPhoto(album, uploaded);
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
        {uploaded.length !== 0 ? (<input
          type="submit"
          value="Add Photo"
          className="btn btn-primary btn-block"
        />) : (
          <div>Please Select you files</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
