import { Middleware } from 'redux';
import client from 'socket.io-client';
import { socketServerResponse } from '../../types';
const WS_BASE_URL = process.env.REACT_APP_WS_URL;
export const socket: Middleware<any, any, any> = ({ dispatch }) => {
  let socket: SocketIOClient.Socket;

  return next => action => {
    if (!action.socket) return next(action);

    const { command, message } = action.socket;
    if (command === 'connect') {
      const url =`${WS_BASE_URL}/codeworks`;
      console.warn('CONNECTING')
      socket = client.connect(url);

      socket.on('connect', () => {
        message && socket.emit('message', message);
        socket.on('message', (message: socketServerResponse) => {
          dispatch({
            type: `PLAYLIST_RECEIVED`,
            playlist: message.data.updatedPlaylist
          });
          if (typeof message.data.tickets === 'number') {
            dispatch({
              type: `TICKETS_RECEIVED`,
              tickets: message.data.tickets
            });
          }
        });
      });

      socket.on('error', (error: Error) => {
        dispatch({
          type: `SOCKET_ERROR`,
          error
        });
      });

    } 

    if (message) {
      socket.emit('message', message);
    }

    next(action);
  }
}