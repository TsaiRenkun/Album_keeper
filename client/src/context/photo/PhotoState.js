import React, { useReducer } from "react";
import axios from "axios";
import PhotoContext from "./photoContext";
import PhotoReducer from "./photoReducer";

import {
  HEALTH_CHECK,
  GET_PHOTOS,
  UPLOAD_PHOTOS,
  DELETE_PHOTO,
  DELETE_PHOTOS,
  SET_LOADING,
  CLEAR_FILTER,
  FILTER_PHOTO,
  UPLOAD_LIST,
} from "../types";

const PhotoState = (props) => {
  const initialState = {
    photos: [],
    loading: false,
    filtered: null,
    uploaded: [],
  };

  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  //HEALTH CHECK
  const healthCheck = async (text) => {
    setLoading();

    const res = await axios.get(`/`);
  };

  //LIST PHOTOS
  const photoList = async (limit) => {
    setLoading();

    const res = await axios.post(`./photos/list`, { skip: 0, limit: 100 });

    dispatch({
      type: GET_PHOTOS,
      payload: res.data.documents,
    });
  };

  //DELETE PHOTO
  const deletePhoto = async (album, fileName) => {
    try {
      const res = await axios.delete(`./photos/${album}/${fileName}`);

      dispatch({ type: DELETE_PHOTO, payload: fileName });
    } catch (err) {}
  };
  //ADD PHOTO
  const addPhoto = async (album, uploaded) => {
    // const data = new FormData();
    const data = [];
    var formData = new FormData();
    formData.set("album", `${album}`);

    for (let i = 0; i < uploaded.length; i++) {

      formData.append("documents", uploaded[i]);

    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    }
    try {
    
      const res = await axios.put("http://localhost:8888/photos", formData, config);
      console.log(res.data.data);

      let update = res.data.data;

      for(let i = 0; i < update.length; i++){

        dispatch({ type: UPLOAD_PHOTOS, payload: update[i]});
      }

    } catch (error) {
      console.log(error);
    }
  };

  //UPLOAD PHONE
  const uploadList = async (document) => {
    dispatch({ type: UPLOAD_LIST, payload: document });
  };

  //Filter Photos
  const filterPhoto = (text) => {
    console.log(text, "inside state")
    dispatch({ type: FILTER_PHOTO, payload: text });

  };
  // Clear photos
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PhotoContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        filtered: state.filtered,
        uploaded: state.uploaded,
        healthCheck,
        photoList,
        setLoading,
        clearFilter,
        filterPhoto,
        deletePhoto,
        addPhoto,
        uploadList,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;
