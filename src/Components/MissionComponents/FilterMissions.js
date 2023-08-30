import { useSelector } from 'react-redux';

const FilteredMissions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const currentMissions = missions.filter((mission) => mission.missionJoin);

  return (
    <>
      <div className="filtered-missions">
        <h2>My Missions</h2>
        {currentMissions.length === 0 ? (
          <div className="each-mission-name">
            No current missions
          </div>
        ) : (
          <div className="mission-names">
            {currentMissions.map((mission) => (
              <div className="each-mission-name" key={mission.missionId}>{mission.missionName}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilteredMissions;
