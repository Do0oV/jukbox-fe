import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserProfile, updateSongQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';

const Dashboard: React.FC = () => {

  const userProfile = useSelector((state: any) => state.user.userProfile)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(updateSongQueue());
  }, [])

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <StyledUserStats userStats={userProfile} />
      <StyledSongQueue />
    </div>
  );
}

const StyledUserStats = styled(UserStats)`
    width: 500px;`

const StyledSongQueue = styled(SongQueue)`
    width: 500px;`

export default Dashboard;