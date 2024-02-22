import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/ActionsTypes';

const initalState = {
  name: null,
  email: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payLoad.name,
        email: action.payLoad.email,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
      };
    default:
      return state;
  }
};

export default reducer;
