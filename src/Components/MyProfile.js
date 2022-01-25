import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter(((mission) => mission.reserved));
  return (
    <div className="flex-row">
      <div>
        <h3 className="text-lg">Missions</h3>
        <ul className="flex-col border-2 border-black m-1  w-64">
          {joinedMissions?.map((mission) => (
            <li
              className="p-4 border-black border divide-x-0"
              key={mission.mission_id}
            >
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
