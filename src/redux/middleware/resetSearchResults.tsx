import { Middleware } from 'redux';

export const searchResultsCleanUp: Middleware<any, any, any> = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (action.type === 'EMPTY_SEARCH_RESULT_STATE') {

    next({
      type: `EMPTY_SEARCH_RESULT_STATE`,
    });
    dispatch({
      type: `${action.type}`,
    })

  } else {
    return next(action);
  }
}