import React from 'react';
import './Login.css';
import { Button } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react'

const Login: React.FC = () => {

  const handleOnClick = () => {
    window.location.href = "http://localhost:4000/login/user/Codeworks";
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
