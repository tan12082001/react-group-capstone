import './styles/App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Profile from './Components/MyProfilePage';
import Missions from './Components/MissionsPage';
import RocketList from './Components/RocketComponents/RocketList';
import { fetchRockets } from './redux/rocketsSlice';
import { fetchMissionsData } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissionsData());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
