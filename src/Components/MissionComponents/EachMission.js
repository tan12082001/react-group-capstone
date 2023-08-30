import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionsSlice';

const EachMission = ({ mission }) => {
  const {
    missionName,
    missionDescription,
    missionId,
  } = mission;

  const dispatch = useDispatch();

  return (
    <tr className="each-mission">
      <td>{missionName}</td>
      <td>{missionDescription}</td>
      <td><span className="not-a-member">NOT A MEMBER</span></td>
      <td><button className="join-mission" type="button" onClick={() => dispatch(joinMission(missionId))}>JOIN MISSION</button></td>
    </tr>
  );
};

EachMission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    missionDescription: PropTypes.string.isRequired,
    missionId: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachMission;
