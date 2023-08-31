import FilteredMissions from './MissionComponents/FilterMissions';
import '../styles/Profile.css';
import FilteredRockets from './RocketComponents/FilterRockets';

const Profile = () => (
  <>
    <div className="profile-outer">
      <FilteredMissions />
      <FilteredRockets />
    </div>
  </>
);

export default Profile;
