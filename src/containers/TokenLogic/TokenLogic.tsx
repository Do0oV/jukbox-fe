import React from 'react';
import { Redirect } from 'react-router';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';

const TokenLogic: React.FC = (props:any) => {
  const dispatch = useDispatch();
  const search = new URLSearchParams(props.location.search);
  let accessToken = search.get('access_token');
  accessToken = accessToken && accessToken.slice(-1) === '#' ? accessToken.slice(0, -1) : accessToken;
  accessToken && dispatch(setAccessToken(accessToken));
  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
  }

  return (
      <Redirect to="/player"/>
  );
}

export default TokenLogic;