import React, { useEffect } from 'react';
import './Player.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong, setSongPosition, lockNextRequest, isLocked, playSong, setDeviceId, setAccessToken } from '../../redux/actions/';
import VenuePlayer from '../../components/VenuePlayer/VenuePlayer';
import VenueInfos from '../../components/VenueInfos/VenueInfos';
import Header from '../../components/Header/Header';
import styled from 'styled-components';
import { Progress } from 'antd';
import { CenteredContent, Song, Artist } from '../../assests/globalStyles';

export const Venue:any = {};

interface WindowInterface extends Window {
  Spotify: any;
}

const Player: React.FC = () => {

  const deviceId = useSelector((state: any) => state.player.deviceId);
  const currentSong = useSelector((state: any) => state.player.currentSong);
  const position = useSelector((state: any) => state.player.position);
  const flag = useSelector((state: any) => state.player.isLocked);

  const dispatch = useDispatch();

  const playerCheckInterval = setInterval(() => checkForPlayer(), 1000);
  const accT:string = localStorage.getItem('access_token') || '';


  const checkForPlayer = async () => {
    if ((window as WindowInterface) !== null && !Venue.player) {
      Venue.player = new (window as WindowInterface).Spotify.Player({
        name: 'JukBox Awesome APP',
        getOAuthToken: (cb:any) => { cb(accT)}
      });
      await Venue.player.connect();
      clearInterval(playerCheckInterval);
      createEventHandlers();
    }
  };

  const createEventHandlers = () => {

    const device_id = window.localStorage.getItem('_spharmony_device_id') || '';
    dispatch(setDeviceId(device_id));
    Venue.player.on('player_state_changed', (state:any) => {

      const current = state.track_window.current_track;
      const newStateOfCurrent = {
        song_id: current.id,
        artist: current.artists[0].name,
        title: current.name,
        album: current.album.name,
        album_cover: current.album.images[0],
        duration: current.duration_ms
      };
      dispatch(setCurrentSong(newStateOfCurrent));
    });
    Venue.player.on('ready', (data:any) => console.log('ready', data))
  };

  const getPosition = () => {
    Venue.player.getCurrentState().then((state:any) => {
      if (!state) {
        console.error('User is not playing music through the Web Playback SDK');
        return;
      }
      // set current position to check when -15sec
      dispatch(setSongPosition(state.position));

    });
  };
  // action to start session
  const startSession = () => {
    dispatch(playSong(deviceId));
  }
  if (!flag) {
    if (currentSong.duration - position >= 0 && currentSong.duration - position <= 17000) {
      dispatch(isLocked(true));
      dispatch(lockNextRequest());
      setTimeout(() => {
        dispatch(playSong(deviceId));
    }, 10000);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getPosition();
    }, 5000);
    dispatch(setAccessToken(accT));
    return () => { // Return callback to run on unmount.
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Player">
      <Header />
      <CenteredContent>
        <VenueInfos />
        {currentSong &&
        <VenuePlayer currentSong={currentSong} startSession={startSession}/>}
        <h1>Codeworks</h1>
        <img src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
        <Song>Cut To The Feeling</Song>
        <Artist>Carly Rae Jepsen</Artist>
        <Progress percent={45} strokeWidth={2} showInfo={false} size="small" strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
        <button onClick={startSession}>START</button>
      </CenteredContent>
    </div>
    );
}

export default Player;