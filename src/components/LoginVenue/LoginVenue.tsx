import React, {useEffect} from 'react';
import { Redirect } from 'react-router';
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/';
import { setLogIn } from '../../redux/actions/';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BigLogo, CenteredContent, Button, MutedButton } from '../../assests/globalStyles';

const apiUrl = process.env.REACT_APP_API_URL;

const SpotifyButton = styled(Button)`
  background-color: #1DB954;
  color: #fff;
  min-width: 150px;

  &:hover {
    background-color: var(--primary-bg-color);
    border: 1px solid #1DB954;
    color: #1DB954;
  }

   @media(min-width: 800px) {
    min-width: 225px;
  }
`;

const LoginVenue: React.FC = (props: any) => {

  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = `${apiUrl}/login/admin`;
    }
  }

  const handleMutedOnClick = () => {
    props.history.push('/');
  }

  useEffect(()=> {
    if(accessToken){
      dispatch(setAccessToken(accessToken));
    }
  },[])

  return (
    <CenteredContent className="LoginVenue">
      {accessToken && <Redirect to="/player"/>}
      <BigLogo>jukbox</BigLogo>
      <SpotifyButton onClick={() => adminLogIn()}>log in with spotify</SpotifyButton>
      <MutedButton onClick={handleMutedOnClick}>Back</MutedButton>
    </CenteredContent>
    );
}

export default LoginVenue;