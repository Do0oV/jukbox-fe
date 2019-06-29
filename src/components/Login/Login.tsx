import React, { useEffect } from 'react';
import './Login.css';
import { Button } from 'antd';
import styled from 'styled-components';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
const apiUrl = process.env.REACT_APP_API_URL;

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
    <div className="Login">
    <StyledButton onClick={handleOnClick}>Log In With Google</StyledButton>
    </div>
  );
}

const StyledButton = styled(Button)`
    width: 500px;`

export default Login;
