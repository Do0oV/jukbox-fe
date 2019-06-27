import React, { useState, useEffect } from 'react';
import './Player.css';
export const Venue:any = {};

interface WindowInterface extends Window {
  Spotify: any;
}

const Player: React.FC = () => {

  const [currentSong, setCurrentSong] = useState({
    song_id: '',
    artist: '',
    title: '',
    album: '',
    album_cover: [],
    duration: 0
  });

  const [flag, setFlag] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

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

      setCurrentSong(prev => newStateOfCurrent);
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
      setCurrentPosition(prev => state.position);

    });
  };
  // action to start session
  const startSession = () => {
    console.log('start')
  }
  if (!flag) {
    if (currentSong.duration - currentPosition !== 0 && currentSong.duration - currentPosition <= 17000) {
      setFlag(true);
      console.log('flag');
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getPosition();
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
