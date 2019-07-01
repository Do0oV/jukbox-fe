import React, { useState } from 'react';
import './Header.css';
import Button from 'antd/es/button';
import { Icon, Input } from 'antd';
import { SmallLogo } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

const Container = styled.div`
  background-color: var(--primary-bg-color);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media(min-width: 800px) {
    padding: 20px 50px;
  }
`;

const SubContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logout = styled.button`
  background-color: transparent;
  color: var(--fourth-color);
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid #3e3e3e;

  &:hover {
    color: var(--primary-bg-color);
    background-color: var(--fourth-color);
  }
`;

const SearchIcon = styled(Icon)`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  padding: 5px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--secondary-color);
    color: var(--primary-bg-color);
    border-radius: 50px;
  }
`;

const Header: React.FC = () => {

  const [searchFlag, setSearchFlag] = useState(false);

  const handleOnSearch = () => {
    setSearchFlag(true)
  }

  const renderRedirect = () => {
    if (searchFlag) return <Redirect to='/search' />
  }

  return (
    <Container className="Header">
      <SmallLogo>JUKBOX</SmallLogo>
      <SubContainer>
        {renderRedirect()}
        <SearchIcon type="search" style={{ color: 'var(--secondary-color)' }} onClick={handleOnSearch} />
        <Logout>LOGOUT</Logout>
      </SubContainer>
    </Container>
  );
}

export default Header;
