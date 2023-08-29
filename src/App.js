import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navigation';
import Profile from './Components/MyProfilePage';
import Missions from './Components/MissionsPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
