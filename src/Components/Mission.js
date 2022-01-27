/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/Missions/Missions';

const Mission = ({
  mission: {
    mission_id, mission_name, description, reserved,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <tr className=" border-solid border-2 border-gray-200" key={mission_id}>
      <td className=" border-solid border-2 border-gray-200 text-center">
        {mission_name}
      </td>
      <td className=" border-solid border-2 border-gray-200 p-6">
        {description}
      </td>
      {reserved ? (
        <>
          <td className=" border-solid border-2 border-gray-200">
            <p className=" w-32 bg-green-400 text-white font-bold m-3 rounded">
              ACTIVE MEMBER
            </p>
          </td>
          <td>
            <button
              onClick={() => dispatch(leaveMission(mission_id))}
              className=" w-32 p-2 border-solid border-2 border-red-600 text-red-600 m-3 rounded"
              type="button"
            >
              Leave Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className=" border-solid border-2 border-gray-200">
            <p className=" w-32 bg-gray-500 text-white font-bold m-3 rounded">
              NOT A MEMBER
            </p>
          </td>
          <td>
            <button
              data-testid={mission_id}
              onClick={() => dispatch(joinMission(mission_id))}
              className=" w-32 p-2 border-solid border-2 border-black m-3 rounded"
              type="button"
            >
              Join Mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Mission;
