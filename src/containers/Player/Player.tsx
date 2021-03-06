import React, { useEffect, useState } from 'react';
import './Player.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong, setSongPosition, lockNextRequest, isLocked, playSong, setDeviceId, setAccessToken, transferPlayerPlayback, isPLaying } from '../../redux/actions/';
import VenuePlayer from '../../components/VenuePlayer/VenuePlayer';
import VenueInfos from '../../components/VenueInfos/VenueInfos';
import Header from '../../components/Header/Header';
import { Switch } from 'antd';
import { CenteredContent } from '../../assests/globalStyles';

export const Venue:any = {};

interface WindowInterface extends Window {
  Spotify: any;
}

const Player: React.FC = (props:any) => {

  const accessToken = useSelector((state:any) => state.user.accessToken);
  const deviceId = useSelector((state: any) => state.player.deviceId);
  const currentSong = useSelector((state: any) => state.player.currentSong);
  const position = useSelector((state: any) => state.player.position);
  const flag = useSelector((state: any) => state.player.isLocked);
  const isPlaying = useSelector((state: any) => state.player.isPlaying);

  const [session, setSession] = useState(false);

  const dispatch = useDispatch();

  // if there is accessToken in localStorage
  const accT:string = localStorage.getItem('access_token') || '';

  // create the player
  const createPlayer = () => {

    const playerCheckInterval = setInterval(() => checkForPlayer(), 1000);

    const checkForPlayer = async () => {
      if ((window as WindowInterface) !== null && !Venue.player) {
        Venue.player = await new (window as WindowInterface).Spotify.Player({
          name: 'JukBox Awesome APP',
          getOAuthToken: (cb:any) => { cb(accessToken)}
        });
        await Venue.player.connect()
        .then((success:any) => {
          if(success) console.log('connected')
        });
        clearInterval(playerCheckInterval);
        createEventHandlers();
      }
    };

    // player events
    const createEventHandlers = () => {
      Venue.player.on('player_state_changed', (state:any) => state && updateCurrentSong(state));

      // when ready send request to BE
      Venue.player.on('ready', (data:any) => {
        const device_id = window.localStorage.getItem('_spharmony_device_id') || '';
        dispatch(setDeviceId(data.device_id));
        dispatch(transferPlayerPlayback(data.device_id));
      });
    };
  };

  // update current song
  const updateCurrentSong = (state:any) => {
    const current = state.track_window.current_track;
    const newStateOfCurrent = {
      song_id: current.id,
      artist: current.artists[0].name,
      title: current.name,
      album: current.album.name,
      album_cover: current.album.images[0].url,
      duration: current.duration_ms
    };
    dispatch(setCurrentSong(newStateOfCurrent));
  }
  // update current song position
  const getPosition = () => {
    // if player is initialized
    if (Venue.player) {
      Venue.player.getCurrentState().then((state:any) => {
        if (!state) {
          console.error('User is not playing music through the Web Playback SDK');
          return;
        }
        dispatch(setSongPosition(state.position));
      });
    }
  };

  // action to start || stop session
  const startSession = () => {
    setSession(prev => {
      prev && isPlaying && togglePlay();
      return !prev;
    });
    createPlayer();

  };

  // if flag to lock next song is false keep looking to send request to BE
  if (!flag && position) {
    if (currentSong.duration - position >= 0 && currentSong.duration - position <= 17000) {
      dispatch(isLocked(true));
      dispatch(lockNextRequest());
      setTimeout(() => {
        dispatch(playSong(deviceId));
      }, (currentSong.duration - position + 1000));
    }
  }

  // player controls
  const togglePlay = () => {
    Venue.player.togglePlay().then(() => {
      dispatch(isPLaying(!isPlaying));
    });
  };

  // on mount check if accessToken in localStorage if not redirect to login
  useEffect(() => {
    if (!accT) {
      props.history.push('/venuelogin');
    } else {
      dispatch(setAccessToken(accT));
    }
    // check the timer to keep track
    const timer = setInterval(() => {
      getPosition();
    }, 1000);
    // Return callback to run on unmount.
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Player">
      <Header />
      <CenteredContent>
        <div className={session ? 'top' : 'middle'}>
          <VenueInfos />
          <Switch onChange={startSession} checkedChildren='/Codeworks' unCheckedChildren='/Codeworks' />
        </div>
        <div className={session ? 'show' : 'hide'}>
          <VenuePlayer currentSong={currentSong} togglePlay={togglePlay} playing={isPlaying} position={position}/>
        </div>
      </CenteredContent>
    </div>
  );
}

export default Player;