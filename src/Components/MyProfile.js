import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter(((mission) => mission.reserved));
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRocket = rockets.filter(((rocket) => rocket.reserved));
  return (
    <div className="flex">
      <div className="w-1/2 p-8">
        <h3 className="text-xl font-bold">My Missions</h3>
        {joinedMissions.length ? (
          <ul className="flex-col border-2 border-black m-1 w-64">
            {joinedMissions?.map((mission) => (
              <li
                className="p-4 border-black border divide-x-0"
                key={mission.mission_id}
              >
                {mission.mission_name}
              </li>
            ))}
          </ul>
        ) : ''}
      </div>
      <div className="w-1/2 p-8">
        <h3 className="text-xl font-bold">My Rockets</h3>
        {reservedRocket.length ? (
          <ul className="flex-col border-2 border-black m-1 w-64">
            {reservedRocket?.map((rocket) => (
              <li
                className="p-4 border-black border divide-x-0"
                key={rocket.rocket_id}
              >
                {rocket.rocket_name}
              </li>
            ))}
          </ul>
        ) : ''}
      </div>
    </div>
  );
};

export default MyProfile;
