import { INIT_USER } from '../actionTypes/actionTypes'

const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, user: [...state.user, action.payload] }

    default:
      return state
  }
};

export default userReducer
