import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from '../Missions/Missions';
import rocketsReducer from '../Rockets/Rockets';

const reducers = combineReducers({
  missionsReducer,
  rocketsReducer,
});
const middlewares = [thunk, logger];

const store = createStore(reducers,
  applyMiddleware(...middlewares));

export default store;
