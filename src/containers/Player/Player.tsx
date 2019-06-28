import React, { useEffect } from 'react';
import './Player.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../redux/actions/setCurrentSong';
import { setSongPosition } from '../../redux/actions/setSongPosition';
import { lockNextRequest } from '../../redux/actions/lockNextRequest';
import { isLocked } from '../../redux/actions/isLocked';
import { playSong } from '../../redux/actions/playSong';
import { setDeviceId } from '../../redux/actions/setDeviceId';
import { setAccessToken } from '../../redux/actions/setAccessToken';

import VenuePlayer from '../../components/VenuePlayer/VenuePlayer';
import VenueInfos from '../../components/VenueInfos/VenueInfos';

export const Venue:any = {};

interface WindowInterface extends Window {
  Spotify: any;
}

const Player: React.FC = () => {

  const accesToken = useSelector((state: any) => state.access_token);
  const deviceId = useSelector((state: any) => state.device_id);
  const current_song = useSelector((state: any) => state.current_song);
  const position = useSelector((state: any) => state.position);
  const flag = useSelector((state: any) => state.isLocked);

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
      console.log(state)
      // set current position to check when -15sec
      dispatch(setSongPosition(state.position));

    });
  };
  // action to start session
  const startSession = () => {
    dispatch(playSong(deviceId));
  }
  if (!flag) {
    if (current_song.duration - position >= 0 && current_song.duration - position <= 17000) {
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
      <VenueInfos />
      {current_song &&
      <VenuePlayer current_song={current_song} startSession={startSession}/>
    }
    </div>
    );
}

export default Player;