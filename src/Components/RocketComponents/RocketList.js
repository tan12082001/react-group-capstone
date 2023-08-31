import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rocketsSlice';
// import { fetchRockets } from '../../redux/rocketsSlice';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.data);

  const dispatch = useDispatch();

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-details">
            <h3>{rocket.name}</h3>
            <p>{rocket.type}</p>
            <button type="button" onClick={handleReserveRocket}>Reserve Rocket</button>
            <button onClick={() => handleCancelReservation(rocketId)}>Cancel Reservation</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketList;
