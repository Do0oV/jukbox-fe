import React from 'react';
import { Redirect } from 'react-router';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';

const UserTokenLogic: React.FC = (props:any) => {

  const dispatch = useDispatch();
  const search = new URLSearchParams(props.location.search);
  const accessToken = search.get('token');
  accessToken && dispatch(setAccessToken(accessToken));
  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
  }

  return (
      <Redirect to="/dashboard"/>
  );
}

export default UserTokenLogic;