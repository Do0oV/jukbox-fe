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
  console.log(currentSong);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(connectSocket(userAccessToken));
  }, [])

  return (
    <div className="Dashboard">
      <Header />
      <PaddedContainer>
        <UserStats userStats={userProfile} />
      </PaddedContainer>
      <PaddedContainer>
        <NowPlaying currentSong={currentSong}/>
      </PaddedContainer>
      <PaddedContainer>
        <SongQueue songQueueItems={playlist}/>
      </PaddedContainer>
    </div>
  );
}

export default Dashboard;
 