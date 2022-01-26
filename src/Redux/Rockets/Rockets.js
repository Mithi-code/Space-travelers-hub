import axios from 'axios';

const initialState = {
  rockets: [],
};

const url = 'https://api.spacexdata.com/v3/rockets';
// const GET_MISSIONS_DATA = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA';
const GET_ROCKETS_DATA_SUCCESS = 'SPACE_TRAVELERES_HUB/ROCKETS/GET_DATA_SUCCESS';
const GET_ROCKETS_DATA_FAILURE = 'SPACE_TRAVELERES_HUB/ROCKETS/GET_DATA_FAILURE';

export const getRocketsData = () => (dispatch) => {
  try {
    axios.get(url).then((response) => dispatch({ type: GET_ROCKETS_DATA_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: GET_ROCKETS_DATA_FAILURE, error });
  }
};

const rocketssReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_DATA_SUCCESS:
      return { ...state, rockets: action.response.data };
    case GET_ROCKETS_DATA_FAILURE:
      return { ...state, rockets: action.error };
    default:
      return state;
  }
};

export default rocketssReducer;
