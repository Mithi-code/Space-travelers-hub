import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../Redux/Rockets/Rockets';
import './rocket.css';

const Rockets = () => {
  const data = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsData());
  }, []);
  return (
    <div>
      {data?.map((item) => (
        <div key={item.mission_id} className="flex ... container">
          <div className="w-0.5/6 ...">
            <img alt="Rocket" src={item.flickr_images[0]} />
          </div>
          <div className="w-5/6 ... py-px px-px details">
            <h1>{item.rocket_name}</h1>
            <p>{item.description}</p>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
