import React from 'react';
import { useSelector } from 'react-redux';

const FilteredRockets = () => {
  const rockets = useSelector((state) => state.rockets.data);
  // Filter reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="filtered-rockets">
        <h2>My Rockets</h2>
        {reservedRockets.length === 0 ? (
          <div className="each-rocket-name">
            No rockets reserved
          </div>
        ) : (
          <div className="rocket-names">
            {reservedRockets.map((rocket) => (
              <div className="each-rocket-name" key={rocket.id}>{rocket.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

// const FilteredRockets = React.memo(FilteredRockets);
FilteredRockets.displayName = 'FilteredRockets';

export default FilteredRockets;
