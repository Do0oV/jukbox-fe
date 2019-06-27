import React, { useState, useEffect } from 'react';
import './Player.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../redux/actions/setCurrentSong';
import { setSongPosition } from '../../redux/actions/setSongPosition';
import { isLocked } from '../../redux/actions/isLocked';


export const Venue:any = {};

interface WindowInterface extends Window {
  Spotify: any;
}

const Player: React.FC = () => {

  const accesToken = useSelector((state: any) => state.access_token);
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

    const device_id = window.localStorage.getItem('_spharmony_device_id');
    Venue.player.on('player_state_changed', (state:any) => {

      const current = state.track_window.current_track;
      const newStateOfCurrent = {
        song_id: current.id,
        artist: current.artists[0].name,
        title: current.name,
        album: current.album.name,
        album_cover: current.album.images,
        duration: current.duration_ms
      };
      dispatch(setCurrentSong(newStateOfCurrent));
    });
    Venue.player.on('ready', (data:any) => console.log('ready', data))
  };

  const getPosition = (cb:any) => {
    Venue.player.getCurrentState().then((state:any) => {
      if (!state) {
        console.error('User is not playing music through the Web Playback SDK');
        return;
      }
      // set current position to check when -15sec
      cb(setSongPosition(state.position));

    });
  };
  // action to start session
  const startSession = () => {
    console.log('start')
  }
  if (!flag) {
    if (current_song.duration - position >= 0 && current_song.duration - position <= 17000) {
      dispatch(isLocked(true));
      console.log('flag');
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getPosition(dispatch);
    }, 5000);
    return () => { // Return callback to run on unmount.
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Player">
    <button onClick={startSession}>START</button>
    </div>
    );
}

export default Player;
