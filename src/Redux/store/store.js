import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from '../Missions/Missions';

const reducers = combineReducers({
  missionsReducer,
});
const middlewares = [thunk, logger];

const store = createStore(reducers,
  applyMiddleware(...middlewares));

export default store;
