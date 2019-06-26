import React from 'react';
import './Login.css';
import { Button } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
// import { login } from '../../redux/actions/getUserStats'

const Login: React.FC = () => {

  const handleOnClick = () => {

  }

  return (
    <div className="Login">
    <StyledButton onClick={handleOnClick}>Log In With Google</StyledButton>
    </div>
  );
}

const StyledButton = styled(Button)`
    width: 500px;`

export default Login;
