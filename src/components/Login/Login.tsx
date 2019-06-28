import React, { useEffect } from 'react';
import './Login.css';
import styled from 'styled-components';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
const apiUrl = process.env.REACT_APP_API_URL;

const Container = styled.div`
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.h1`
  color: var(--primary-color);
  font-size: 34px;
  letter-spacing: 10px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
`;

const Button = styled.button`
  background-color: var(--fourth-color);
  border-radius: 30px;
  width: 190px;
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
    <Container className="Login">
      <Logo>JUKBOX</Logo>
      <Button onClick={handleOnClick}>LOG IN WITH GOOGLE</Button>
    </Container>
  );
}


export default Login;
