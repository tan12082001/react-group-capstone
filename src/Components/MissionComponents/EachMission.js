import PropTypes from 'prop-types';

const EachMission = ({ mission }) => {
  const {
    missionName,
    missionDescription,
  } = mission;

  return (
    <tr className="each-mission">
      <td>{missionName}</td>
      <td>{missionDescription}</td>
      <td><span className="not-a-member">NOT A MEMBER</span></td>
      <td><button className="join-mission" type="button">JOIN MISSION</button></td>
    </tr>
  );
};

EachMission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    missionDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachMission;
