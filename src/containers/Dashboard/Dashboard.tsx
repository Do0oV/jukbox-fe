import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserStats } from '../../redux/actions/getUserStats'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';
import { connectSocket } from '../../redux/actions/connectSocket';

const Dashboard: React.FC = () => {

  const userStats = useSelector((state: any) => state.userStatsReducer.userStats)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStats());
    dispatch(connectSocket(userStats.email));
  }, [])

  console.log(userStats)

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <StyledUserStats userStats={userStats} />
      <StyledSongQueue />
    </div>
  );
}

const StyledUserStats = styled(UserStats)`
    width: 500px;`

const StyledSongQueue = styled(SongQueue)`
    width: 500px;`

export default Dashboard;