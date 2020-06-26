import {
  HEALTH_CHECK,
  GET_PHOTOS,
  UPLOAD_PHOTOS,
  UPLOAD_LIST,
  DELETE_PHOTO,
  DELETE_PHOTOS,
  SET_LOADING,
  CLEAR_FILTER,
  FILTER_PHOTO
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      }
    case FILTER_PHOTO:
      return {
        ...state,
        filtered: state.photos.filter((photo) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return photo.album.match(regex) || photo.name.match(regex)
        })
      }
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter(
          (photo) => photo.name !== action.payload
        ),
        loading: false
      }
    case UPLOAD_PHOTOS:
      return {
        ...state,
        photos: [action.payload, ...state.photos],
        loading: false
      }
    case UPLOAD_LIST:
      return {
        ...state,
        uploaded: [action.payload, ...state.uploaded],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state
  }
}
