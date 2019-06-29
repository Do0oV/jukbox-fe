import React from 'react';
import './SplashScreen.css';
import styled from 'styled-components';
import { BigLogo, CenteredContent, Button, MutedButton } from '../../assests/globalStyles';

const apiUrl = 'localhost:3000';

const UserButton = styled(Button)`
  background-color: var(--secondary-color);
  color: var(--primary-bg-color);
  border: 1px solid var(--primary-bg-color);
  min-width: 150px;

  &:hover {
    background-color: var(--primary-bg-color);
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }
`;

const SplashScreen: React.FC = (props: any) => {
  console.log(props);

  const handleUserOnClick = () => {
    props.history.push('/login');
  }

  const handleVenueOnClick = () => {
    props.history.push('/venuelogin')
  }

  return (
    <CenteredContent className="SplashScreen">
        <BigLogo>jukbox</BigLogo>
        <UserButton onClick={handleUserOnClick}>user login</UserButton>
        <MutedButton onClick={handleVenueOnClick}>venue?</MutedButton>
    </CenteredContent>
  );
}

export default SplashScreen;
