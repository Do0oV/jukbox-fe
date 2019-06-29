import React, { useEffect } from 'react';
import './Login.css';
import styled from 'styled-components';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
import { BigLogo, CenteredContent, Button, MutedButton } from '../../assests/globalStyles';
const apiUrl = process.env.REACT_APP_API_URL;

const GoogleButton = styled(Button)`
  background-color: rgb(221, 76, 60);
  color: white;
  min-width: 150px;

  &:hover {
    background-color: var(--primary-bg-color);
    border: 1px solid rgb(221, 76, 60);
    color: rgb(221, 76, 60);
  }

  @media(min-width: 800px) {
    min-width: 225px;
  }
`;

const Login: React.FC = (props: any) => {

  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const handleOnClick = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = `${apiUrl}/login/user/Codeworks`;
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
    <CenteredContent className="Login">
      <BigLogo>jukbox</BigLogo>
      <GoogleButton onClick={handleOnClick}>log in with google</GoogleButton>
      <MutedButton onClick={handleMutedOnClick}>Back</MutedButton>
    </CenteredContent>
  );
}


export default Login;
