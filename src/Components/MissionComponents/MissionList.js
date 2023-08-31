import { useSelector } from 'react-redux';
import EachMission from './EachMission';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  const error = useSelector((state) => state.missions.error);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <>
      <div className="missions-outer">
        <table className="missions-table">
          <thead className="missions-heading">
            <tr className="column-names">
              <th className="mission-column">Mission</th>
              <th className="mission-column">Description</th>
              <th className="mission-column">Status</th>
            </tr>
          </thead>
          <tbody className="missions-body">
            {missions.map((mission) => (
              <EachMission key={mission.missionId} mission={mission} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MissionList;
