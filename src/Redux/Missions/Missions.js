/* eslint-disable camelcase */
import axios from 'axios';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';
const JOIN_MISSION = 'SPACE_TRAVELERES_HUB/MISSIONS/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE_TRAVELERES_HUB/MISSIONS/LEAVE_MISSION';
const GET_MISSIONS_DATA_SUCCESS = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA_SUCCESS';
const GET_MISSIONS_DATA_FAILURE = 'SPACE_TRAVELERES_HUB/MISSIONS/GET_DATA_FAILURE';

export const getMissionsData = () => (dispatch) => {
  try {
    axios
      .get(url)
      .then((response) => dispatch({ type: GET_MISSIONS_DATA_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: GET_MISSIONS_DATA_FAILURE, error });
  }
};

export const joinMission = (mission_id) => ({
  type: JOIN_MISSION,
  mission_id,
});

export const leaveMission = (mission_id) => ({
  type: LEAVE_MISSION,
  mission_id,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_DATA_SUCCESS:
      return { ...state, missions: action.response.data };
    case GET_MISSIONS_DATA_FAILURE:
      return { ...state, missions: action.error };
    case JOIN_MISSION:
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => {
            if (mission.mission_id !== action.mission_id) {
              return mission;
            }
            return { ...mission, reserved: true };
          }),
        ],
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => {
            if (mission.mission_id !== action.mission_id) {
              return mission;
            }
            return { ...mission, reserved: false };
          }),
        ],
      };
    default:
      return state;
  }
};

export default missionsReducer;
