import React from 'react';
import './SplashScreen.css';
import styled from 'styled-components';
import { BigLogo, CenteredContent } from '../../assests/globalStyles';


const UserButton = styled.button`
  background-color: var(--secondary-color);
  border-radius: 30px;
  color: var(--primary-bg-color);
  border: none;
  padding: 5px 15px;
  letter-spacing: 2px;
  border: 1px solid var(--primary-bg-color);

  &:hover {
    background-color: var(--primary-bg-color);
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }
`;

const SplashScreen: React.FC = () => {
  return (
    <CenteredContent className="SplashScreen">
        <BigLogo>JUKBOX</BigLogo>
        <UserButton>LOGIN AS USER</UserButton>
    </CenteredContent>
  );
}

export default SplashScreen;
