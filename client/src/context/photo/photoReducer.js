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

export default (state, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case FILTER_PHOTO:
      return {
        ...state,
        filtered: state.photos.filter((photo) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return photo.album.match(regex) || photo.name.match(regex);
        }),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
