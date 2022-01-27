/* eslint-disable camelcase */
import axios from 'axios';

const initialState = {
  rockets: [],
};

const url = 'https://api.spacexdata.com/v3/rockets';
const JOIN_Rocket = 'SPACE_TRAVELERES_HUB/ROCKETS/JOIN_Rocket';
const LEAVE_Rocket = 'SPACE_TRAVELERES_HUB/ROCKETS/LEAVE_Rocket';
const GET_ROCKETS_DATA_SUCCESS = 'SPACE_TRAVELERES_HUB/ROCKETS/GET_DATA_SUCCESS';
const GET_ROCKETS_DATA_FAILURE = 'SPACE_TRAVELERES_HUB/ROCKETS/GET_DATA_FAILURE';

export const getRocketsData = () => (dispatch) => {
  try {
    axios
      .get(url)
      .then((response) => dispatch({ type: GET_ROCKETS_DATA_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: GET_ROCKETS_DATA_FAILURE, error });
  }
};

export const reserveRocket = (rocket_id) => ({
  type: JOIN_Rocket,
  rocket_id,
});

export const cancelRocket = (rocket_id) => ({
  type: LEAVE_Rocket,
  rocket_id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_DATA_SUCCESS:
      return { ...state, rockets: action.response.data };
    case GET_ROCKETS_DATA_FAILURE:
      return { ...state, rockets: action.error };
    case JOIN_Rocket:
      return {
        ...state,
        rockets: [
          ...state.rockets.map((rocket) => {
            if (rocket.rocket_id !== action.rocket_id) {
              return rocket;
            }
            return { ...rocket, reserved: true };
          }),
        ],
      };
    case LEAVE_Rocket:
      return {
        ...state,
        rockets: [
          ...state.rockets.map((rocket) => {
            if (rocket.rocket_id !== action.rocket_id) {
              return rocket;
            }
            return { ...rocket, reserved: false };
          }),
        ],
      };
    default:
      return state;
  }
};

export default rocketsReducer;
