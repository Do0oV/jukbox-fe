import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserProfile } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';
import { connectSocket } from '../../redux/actions/';
import Header from '../../components/Header/Header';
import NowPlaying from '../../components/NowPlaying/NowPLaying';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

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
  const currentSong = playlist.find((song: any) => song.currentlyplaying);
  const loggedIn = localStorage.getItem('access_token') && true;

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(connectSocket(userAccessToken));
  }, [])

  const redirectToLogIn = () => {
    if (!loggedIn) return <Redirect to='/' />
  }

  return (
    <div className="Dashboard">
      {redirectToLogIn()}
      <Header />
      <PaddedContainer>
        <UserStats userStats={userProfile} />
      </PaddedContainer>
      <PaddedContainer>
        <NowPlaying currentSong={currentSong}/>
      </PaddedContainer>
      <PaddedContainer>
        <SongQueue songQueueItems={playlist} />
      </PaddedContainer>
    </div>
  );
}

export default Dashboard;
