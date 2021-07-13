import { combineReducers } from 'redux'

import userReducer from './userReducer'
import teamsReducer from './teamsReducer'

const rootReducer = combineReducers({
  userReducer,
  teamsReducer
})

export default rootReducer
