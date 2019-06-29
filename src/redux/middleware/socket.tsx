import { WS_BASE_URL } from '../../config';
import { Middleware } from 'redux';
import client from 'socket.io-client';
import { socketServerResponse } from '../../types';

export const socket: Middleware<any, any, any> = ({ dispatch }) => {
  let socket: SocketIOClient.Socket;
  
  return next => action => {
    if (!action.socket) return next(action);
    
    const { command, message } = action.socket;
    if (command === 'connect') {
      const url =`${WS_BASE_URL}/codeworks`;
      socket = client.connect(url);

      socket.on('connect', () => {
        console.log('CONNECTED TO SOCKET AT ', url);
        socket.emit('message', message);
        socket.on('message', (message: socketServerResponse) => {
          console.log('connected you to venue codeworks');
          dispatch({
            type: `UPDATED_LIST`,
            playlist: message.data.updatedPlaylist
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
      socket.emit('message', message);
    }

    next(action);
  }
}