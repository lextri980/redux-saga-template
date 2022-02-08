import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATING_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETING_USER,
  LOADING_USER,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATING_USER
} from "../constants/userConst";

const initState = {
  users: [],
  loading: false,
  error: null,
};

function userReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING_USER:
    case CREATING_USER:
    case DELETING_USER:
    case UPDATING_USER:
      return {
        ...state,
        loading: true,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== payload),
      };

    case LOAD_USER_FAIL:
    case CREATE_USER_FAIL:
    case DELETE_USER_FAIL:
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

export default userReducer;
