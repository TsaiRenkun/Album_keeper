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
} from "../types";

const PhotoState = (props) => {
  const initialState = {
    photos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  //HEALTH CHECK
  const healthCheck = async (text) => {
    setLoading();

    const res = await axios.get(
      `http://localhost:8888/health`
    );

    console.log(res, "FIRST TRY")

  };

   //LIST PHOTOS
   const photoList = async (limit) => {
    setLoading();

    const res = await axios.post(
      `http://localhost:8888/photos/list`, {skip: 0, limit: 5}
    );

    console.log(res.data.documents, "SEONDARY TRY GET LIST")

    dispatch({
      type: GET_PHOTOS,
      payload: res.data.documents,
    });

  };



  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });


  return (
    <PhotoContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        healthCheck,
        photoList,
        setLoading,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;
