import React, { useEffect } from 'react';
import './Dashboard.css';
import { LoginProps } from '../../types';
import { getUserStats } from '../../redux/actions/getUserStats'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserStats from '../../components/UserStats/UserStats'
import songQueue from '../../components/SongQueue/SongQueue'

const Dashboard: React.FC<LoginProps> = () => {

  const userStats = useSelector((state: any) => state.userStatsReducer.userStats)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStats())
  }, [])

  console.log(userStats)

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <StyledUserStats userStats={userStats} />
    </div>
  );
}

const StyledUserStats = styled(UserStats)`
    width: 500px;`

const StyledUserStats = styled(UserStats)`
    width: 500px;`

export default Dashboard;