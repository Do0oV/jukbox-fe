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
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
`;

const Container = styled.div`
  display: inline;  
  position: fixed;
  width: 100vw;
  overflow: scroll;
`;

const Dashboard: React.FC = () => {
  const userProfile = useSelector((state: any) => state.user.userProfile);
  const stripeSessionID = useSelector((state: any) => state.user.stripeSessionID);
  const userAccessToken = useSelector((state: any) => state.user.accessToken);
  const dispatch = useDispatch();
  const loggedIn = localStorage.getItem('access_token') && true;
  let playlist = useSelector((state: any) => state.playlist.playlist);
  let currentSong;

  if (playlist !== undefined) {
    currentSong = playlist.find((song: any) => song.currentlyplaying);
    playlist = playlist.filter((song: any) => !song.currentlyplaying);
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token') as string;
    dispatch(getUserProfile());
    console.log('CONNECTING FROM DASHBOARD');
    dispatch(connectSocket(accessToken));
  }, [])

  const redirectToLogIn = () => {
    if (!loggedIn) return <Redirect to='/' />
  }

  return (
    <div className="Dashboard">
      {redirectToLogIn()}
      <Header />
      <Container>
        <PaddedContainer>
          <UserStats userStats={userProfile} stripeSessionID={stripeSessionID} />
        </PaddedContainer>
        <PaddedContainer>
          <NowPlaying currentSong={currentSong} />
        </PaddedContainer>
        <PaddedContainer>
          <SongQueue songQueueItems={playlist} />
        </PaddedContainer>
      </Container>
    </div>
  );
}

export default Dashboard;
