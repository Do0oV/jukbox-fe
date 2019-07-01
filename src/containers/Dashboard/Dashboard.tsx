import React, { useEffect } from 'react';
import './Dashboard.css';
import { getUserProfile, updateSongQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserStats from '../../components/UserStats/UserStats'
import SongQueue from '../../components/SongQueue/SongQueue';
import { connectSocket } from '../../redux/actions/';
import { Link } from 'react-router-dom';

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
      <h1>Dashboard</h1>
      <StyledUserStats userStats={userProfile} />
      <StyledSongQueue />
      <Link to="/search">Go to Search</Link>
    </div>
  );
}

const StyledUserStats = styled(UserStats)`
    width: 500px;`

const StyledSongQueue = styled(SongQueue)`
    width: 500px;`

export default Dashboard;