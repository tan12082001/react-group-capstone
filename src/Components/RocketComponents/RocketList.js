import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/rocketsSlice';
// import { fetchRockets } from '../../redux/rocketsSlice';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.data);

  const dispatch = useDispatch();

  // const handleReserveRocket = (rocketId) => {
  //   dispatch(reserveRocket(rocketId));
  // };

  const handleReserveRocket = (rocketId, reserved) => {
    if (reserved) {
      dispatch(reserveRocket(rocketId));
    } else {
      dispatch(cancelReservation(rocketId));
    }
  };

  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-details">
            <h3>{rocket.name}</h3>
            <p>{rocket.type}</p>
            <>
              <span className="reserved-badge">{(rocket.reserved) ? 'Reserved' : undefined}</span>
              <button className={rocket.reserved ? 'cancel-Reservation' : 'reserve-Rocket'} type="button" onClick={handleReserveRocket}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
            </>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketList;
