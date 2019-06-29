import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserProfile, updateSongQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';
import { connectSocket } from '../../redux/actions/';
import Header from '../../components/Header/Header';
import NowPlaying from '../../components/NowPlaying/NowPLaying';
import { Row, Col, Avatar } from 'antd';
import styled from 'styled-components';

const PaddedContainer = styled.div`
  padding: 10px 5px;
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
`;

const Dashboard: React.FC = () => {

  const userProfile = useSelector((state: any) => state.user.userProfile)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(connectSocket(userProfile.email));
    dispatch(updateSongQueue());
  }, [])

  return (
    <div className="Dashboard">
      <Header />
      <PaddedContainer>
        <UserStats userStats={userProfile} />
      </PaddedContainer>
      <PaddedContainer>
        <NowPlaying />
      </PaddedContainer>
      <PaddedContainer>
        <SongQueue />
      </PaddedContainer>
    </div>
  );
}

export default Dashboard;