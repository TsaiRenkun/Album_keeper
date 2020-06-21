import React, { useState, useContext, useEffect } from "react";
import PhotoContext from "../../context/photo/photoContext";

const ContactForm = () => {
  const photoContext = useContext(PhotoContext);

  const { addPhoto } = photoContext
  useEffect(() => {}, []);

  const [photo, setPhoto] = useState({
    album: "",
    document: null,
    file: [],
  });

  const onChange = (e) => {
    setPhoto({
      ...photo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log(e);
  };

  const clearForm = () =>{
      setPhoto({
          document: null,
      });
  }
  const { album, documents } = photo;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text=primary">Add Photos</h2>
      <label>
        Pick you Album:
        <select value={onChange} onChange={onChange}>
          <option value="Personal">Personal</option>
          <option value="Food">Food</option>
          <option value="Nature">Nature</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <input
        type="file"
        placeholder="file"
        name = {document}
        onChange={onChange}
      />
       <input
          type="submit"
          value="Add Photo"
          className="btn btn-primary btn-block"
        />
    </form>
  );
};

export default ContactForm;
