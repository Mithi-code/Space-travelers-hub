import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../Redux/Missions/Missions';
import Mission from './Mission';

const Missions = () => {
  const data = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.length) {
      dispatch(getMissionsData());
    }
  }, []);

  return (
    <table className="table-fixed m-20 border-solid ring ring-gray-300">
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
