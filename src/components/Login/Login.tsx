import React from 'react';
import './Login.css';
import { Button } from 'antd';
import styled from 'styled-components';


const StyledButton = styled(Button)`
    width: 500px;`

const Login: React.FC = () => {
  return (
    <div className="Login">
    <StyledButton>TEST</StyledButton>
    </div>
  );
}

export default Login;
