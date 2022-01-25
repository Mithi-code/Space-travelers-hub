import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../Redux/Missions/Missions';

const Missions = () => {
  const data = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsData());
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
        {data?.map((item) => (
          <tr
            className=" border-solid border-2 border-gray-200"
            key={item.mission_id}
          >
            <td className=" border-solid border-2 border-gray-200 text-center">
              {item.mission_name}
            </td>
            <td className=" border-solid border-2 border-gray-200 p-6">
              {item.description}
            </td>
            <td className=" border-solid border-2 border-gray-200">
              <p className=" w-32 bg-gray-500 text-white font-bold m-3 rounded">
                NOT A MEMBER
              </p>
            </td>
            <td>
              <button className=" w-32 p-2 border-solid border-2 border-black m-3 rounded" type="button">
                join Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
