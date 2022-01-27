import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData, reserveRocket, cancelRocket } from '../Redux/Rockets/Rockets';
import './rocket.css';

const Rockets = () => {
  const data = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();
  const handleClickReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleClickCancel = (id) => {
    dispatch(cancelRocket(id));
  };
  useEffect(() => {
    if (!data.length) {
      dispatch(getRocketsData());
    }
  }, []);
  return (
    <div>
      {data?.map((e) => (
        <div key={e.rocket_id} className="flex ... container">
          <div className="w-0.5/6 ...">
            <img alt="Rocket" src={e.flickr_images[0]} />
          </div>
          <div className="w-5/6 ... py-px px-px details">
            <h1>{e.rocket_name}</h1>
            <p>
              {e.reserved && <span>Reserved</span>}
              {e.description}
            </p>
            {
              !e.reserved ? (
                <button data-testid={e.rocket_id} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { handleClickReserve(e.rocket_id); }}>
                  Reserve Rocket
                </button>
              ) : (
                <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => { handleClickCancel(e.rocket_id); }}>
                  Cancel Reservation
                </button>
              )
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
