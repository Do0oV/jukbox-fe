import { WS_BASE_URL } from '../../config';
import { Middleware } from 'redux';
import client from 'socket.io-client';
import { SongQueue } from '../../types';

export const socket: Middleware<any, any, any> = ({ dispatch, getState }: any) => {
  let socket: SocketIOClient.Socket;
  
  return (next: any) => (action: any) => {
    if (!action.socket) return next(action);

    if (action.socket.command === 'connect') {
      const url =`${WS_BASE_URL}/codeworks`;
      console.log('CONNECTING TO SOCKET', url);
      socket = client.connect(url);

      socket.on('connect', () => {
        socket.on('updatedPlaylist', (playlist: SongQueue) => {
          dispatch({
            type: `UPDATED_LIST`,
            playlist
          });
        });
  
      });
  
      socket.on('error', (error:any) => {
        dispatch({
          type: `SOCKET_ERROR`,
          error
        });
      });
    }

    next(action);
  }
}