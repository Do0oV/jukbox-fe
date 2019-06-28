import React from 'react';
// import './TokenLogic.css';
import { Redirect } from 'react-router';
import { setAccessToken } from '../../redux/actions/setAccessToken';
import { setLogIn } from '../../redux/actions/setLogIn';
import { useDispatch } from 'react-redux';

const UserTokenLogic: React.FC = (props:any) => {

  const dispatch = useDispatch();
  const search = new URLSearchParams(props.location.search);

  console.log(window.location.search)

  const accessToken = window.location.href.split('=')[1];

  console.log(accessToken)

  accessToken && dispatch(setAccessToken(accessToken));
  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
  }

  dispatch(setLogIn());

  return (
      <Redirect to="/dashboard"/>
  );
}

export default UserTokenLogic;