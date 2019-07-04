import React, { useState } from 'react';
import './Header.css';
import { SmallLogo } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

const Container = styled.div`
  background-color: var(--primary-bg-color);
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media(min-width: 800px) {
    padding: 20px 50px;
  }
`;

const SubContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logout = styled.button`
  width: 75px;
  background-color: black;
  border: 2px solid #f7dd72;
  border-radius: 6px
  color: #f7dd72;
  font-size: 12px;
  padding: 5px;
  transition: .5s;
  margin-right: 10px;

  &:hover {
    border-radius: 25px;
  }

  @media(min-width: 800px) {
    width: 100px;
    font-size: 16px;
  }
`;

const Header: React.FC = () => {

  const [logOut, setLogOut] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    setLogOut(true);
  }

  const renderRedirectLogOut = () => {
    if (logOut) return <Redirect to='/' />
  }

  return (
    <Container className="Header">
      <SmallLogo>JUKBOX</SmallLogo>
      <SubContainer>
        {renderRedirectLogOut()}
        <Logout onClick={handleLogOut}>Logout</Logout>
      </SubContainer>
    </Container>
  );
}

export default Header;
