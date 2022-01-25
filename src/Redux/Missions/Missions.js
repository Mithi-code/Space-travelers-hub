import axios from 'axios';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';
// const GET_MISSIONS_DATA = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA';
const GET_MISSIONS_DATA_SUCCESS = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA_SUCCESS';
const GET_MISSIONS_DATA_FAILURE = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA_FAILURE';

export const getMissionsData = () => (dispatch) => {
  try {
    axios.get(url).then((response) => dispatch({ type: GET_MISSIONS_DATA_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: GET_MISSIONS_DATA_FAILURE, error });
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_DATA_SUCCESS:
      return { ...state, missions: action.response.data };
    case GET_MISSIONS_DATA_FAILURE:
      return { ...state, missions: action.error };
    default:
      return state;
  }
};

export default missionsReducer;
