import React from 'react';
import { useSelector } from 'react-redux';

const FilteredRockets = () => {
  const rockets = useSelector((state) => state.rockets.data);

  // Filter reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-outer">
      <h2>My Profile</h2>
      <h3>Reserved Rockets:</h3>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
            {' '}
            -
            {rocket.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const FilteredRockets = React.memo(FilteredRockets);
FilteredRockets.displayName = 'FilteredRockets';

export default FilteredRockets;
