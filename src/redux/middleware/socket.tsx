import { WS_BASE_URL } from '../../config';
import { Middleware } from 'redux';
import client from 'socket.io-client';
import { SongQueue } from '../../types';

export const socket: Middleware<any, any, any> = ({ dispatch }) => {
  let socket: SocketIOClient.Socket;
  
  return next => action => {
    if (!action.socket) return next(action);
    
    const { command, message, data, response } = action.socket;
    if (command === 'connect') {
      const url =`${WS_BASE_URL}/codeworks`;
      socket = client.connect(url);

      socket.on('connect', () => {
        console.log('CONNECTED TO SOCKET AT ', url);
        socket.emit(message, data.userEmail);
        socket.on(response, (playlist: SongQueue) => {
          console.log('CONNECTED TO NAMESPACE CODEWORKS');
          dispatch({
            type: `UPDATED_LIST`,
            playlist
          });
        });
      });
  
      socket.on('error', (error: Error) => {
        dispatch({
          type: `SOCKET_ERROR`,
          error
        });
      });
      
    } else if (command === 'updateSongQueue') {
      socket.emit(message, data.song, data.userEmail);
    }

    next(action);
  }
}