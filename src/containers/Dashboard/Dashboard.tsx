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
  const stripeSessionID = useSelector((state: any) => state.user.stripeSessionID);
  const userAccessToken = useSelector((state: any) => state.user.accessToken);
  const playlist = useSelector((state: any) => state.playlist.playlist);
  const dispatch = useDispatch();
  const loggedIn = localStorage.getItem('access_token') && true;
  let currentSong;
  
  if (playlist !== undefined) {
    currentSong = playlist.find((song: any) => song.currentlyplaying);
  }

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
        <UserStats userStats={userProfile} stripeSessionID={stripeSessionID} />
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
