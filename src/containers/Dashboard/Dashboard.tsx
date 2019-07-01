import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserProfile, updateSongQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';
import { connectSocket } from '../../redux/actions/';
import { Link } from 'react-router-dom';
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

  const userProfile = useSelector((state: any) => state.user.userProfile);
  const userAccessToken = useSelector((state: any) => state.user.accessToken);
  const playlist = useSelector((state: any) => state.playlist.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(connectSocket(userAccessToken));
    playlist && console.log('Playlist: ', playlist);
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
      <Link to="/search">Go to Search</Link>
    </div>
  );
}

export default Dashboard;