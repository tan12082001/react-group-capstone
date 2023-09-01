import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const EachMission = ({ mission }) => {
  const {
    missionName,
    missionDescription,
    missionId,
    missionJoin,
  } = mission;

  const dispatch = useDispatch();

  const checkStatus = () => {
    if (missionJoin) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  return (
    <tr className="each-mission">
      <td>{missionName}</td>
      <td>{missionDescription}</td>
      <td><span className={missionJoin ? 'active-member' : 'not-a-member'}>{missionJoin ? 'Active Memeber' : 'NOT A MEMBER'}</span></td>
      <td><button className={missionJoin ? 'leave-mission' : 'join-mission'} type="button" onClick={checkStatus}>{missionJoin ? 'Leave Mission' : 'Join Mission'}</button></td>
    </tr>
  );
};

EachMission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    missionDescription: PropTypes.string.isRequired,
    missionId: PropTypes.string.isRequired,
    missionJoin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EachMission;
