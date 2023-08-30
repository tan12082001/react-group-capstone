import FilteredMissions from './MissionComponents/FilterMissions';
import '../styles/Profile.css';

const Profile = () => (
  <>
    <div className="profile-outer">
      <FilteredMissions />
    </div>
  </>
);

export default Profile;
