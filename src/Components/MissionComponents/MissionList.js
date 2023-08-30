import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissionsData } from '../../redux/missions/missionsSlice';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  // const isLoading = useSelector((state) => state.missions.isLoading);
  // const error = useSelector((state) => state.missions.error);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissionsData());
  }, []);

  console.log(missions);
};

export default MissionList;
