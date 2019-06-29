import React, {useEffect} from 'react';
import { Redirect } from 'react-router';
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/setAccessToken';
import { setLogIn } from '../../redux/actions/setLogIn';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BigLogo, CenteredContent } from '../../assests/globalStyles';

const apiUrl = process.env.REACT_APP_API_URL;

const SpotifyButton = styled.button`
  background-color: #1DB954;
  color: #fff;
  border-radius: 30px;
  border: none;
  padding: 5px 15px;
  letter-spacing: 2px;

  &:hover {
    background-color: #1ED760;
  }
`;

const LoginVenue: React.FC = () => {

  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = `${apiUrl}/login/admin`;
    }
  }

  useEffect(()=> {
    if(accessToken){
      dispatch(setAccessToken(accessToken));
    }
  },[])

  return (
    <CenteredContent className="LoginVenue">
      {accessToken && <Redirect to="/player"/>}
      <BigLogo>JUKBOX</BigLogo>
      <SpotifyButton onClick={() => adminLogIn()}>LOG IN WITH SPOTIFY</SpotifyButton>
    </CenteredContent>
    );
}

export default LoginVenue;