import React, { useEffect } from 'react';
import './Login.css';
import styled from 'styled-components';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
import { BigLogo, CenteredContent } from '../../assests/globalStyles';
const apiUrl = process.env.REACT_APP_API_URL;

const GoogleButton = styled.button`
  background-color: rgb(221, 76, 60);
  border-radius: 30px;
  color: white;
  width: 210px;
  border: none;
  padding: 5px;
  letter-spacing: 2px;

  &:hover {
    background-color: rgb(224, 97, 83);
  }
`;

const Login: React.FC = () => {

  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const handleOnClick = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = `${apiUrl}/login/user/Codeworks`;
    }
  }

  useEffect(()=> {
    if(accessToken){
      dispatch(setAccessToken(accessToken));
    }
  },[])

  return (
    <CenteredContent className="Login">
      <BigLogo>JUKBOX</BigLogo>
      <GoogleButton onClick={handleOnClick}>LOG IN WITH GOOGLE</GoogleButton>
    </CenteredContent>
  );
}


export default Login;
