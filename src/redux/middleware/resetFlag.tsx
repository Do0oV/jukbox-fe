import { Middleware } from 'redux';

export const resetFlag: Middleware<any, any, any> = ({ dispatch, getState }: any) => (next: any) => (action: any) => {
  if (action.type === 'PLAY_SONG_PENDING') {

    next({
      type: `SET_FLAG`,
      data: false
    });

  } else {
    return next(action);
  }
}