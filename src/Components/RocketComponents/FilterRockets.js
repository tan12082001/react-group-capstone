import React from 'react';
import { useSelector } from 'react-redux';

const FilteredRockets = () => {
  const rockets = useSelector((state) => state.rockets.data);

  // Filter reserved rockets
  const currentRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="filtered-rockets">
        <h2>My Rockets</h2>
        {currentRockets.length === 0 ? (
          <div className="each-rocket-name">
            No rockets reserved
          </div>
        ) : (
          <div className="rocket-names">
            {currentRockets.map((rocket) => (
              <div className="each-rocket-name" key={rocket.rocket.id}>{rocket.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilteredRockets;
