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
} from "../types";

const PhotoState = (props) => {
  const initialState = {
    photos: [],
    loading: false,
    filtered: null,
  };

  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  //HEALTH CHECK
  const healthCheck = async (text) => {
    setLoading();

    const res = await axios.get(`/`);

    console.log(res, "FIRST TRY");
  };

  //LIST PHOTOS
  const photoList = async (limit) => {
    setLoading();

    const res = await axios.post(`./photos/list`, { skip: 0, limit: 5 });

    console.log(res.data.documents, "SEONDARY TRY GET LIST");

    dispatch({
      type: GET_PHOTOS,
      payload: res.data.documents,
    });
  };

  //Filter Photos
  const filterPhoto = (text) => {
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
        healthCheck,
        photoList,
        setLoading,
        clearFilter,
        filterPhoto,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;
