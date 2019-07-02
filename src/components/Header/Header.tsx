import React, { useState } from 'react';
import './Header.css';
import { Icon } from 'antd';
import { SmallLogo } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cleanUpSearchState } from '../../redux/actions/';

const Container = styled.div`
  background-color: var(--primary-bg-color);
  padding: 10px 40px;
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
  border: none;
  color: var(--fourth-color);
  border: 1px solid transparent;
  font-size: 12px;
  padding: 5px;
  transition: .5s;

  &:hover {
    border: 1px solid white;
    border-radius: 30px;
  }

  @media(min-width: 800px) {
    font-size: 16px;
    padding: 18px;
  }
`;

const SearchIcon = styled(Icon)`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid transparent;
  transition: .5s;

  &:hover {
    border: 1px solid var(--secondary-color);
    color: var(--primary-bg-color);
    border-radius: 50px;
  }

  @media(min-width: 800px) {
    font-size: 28px;
    padding: 20px;
  }
`;

const Header: React.FC = () => {

  const [searchFlag, setSearchFlag] = useState(false);
  const [logOut, setLogOut] = useState(false)

  const dispatch = useDispatch();

  const handleOnSearch = () => {
    setSearchFlag(true)
    dispatch(cleanUpSearchState())
  }

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    setLogOut(true);
  }

  const renderRedirect = () => {
    if (searchFlag) return <Redirect to='/search' />
  }

  const renderRedirectLogOut = () => {
    if (logOut) return <Redirect to='/login' />
  }

  return (
    <Container className="Header">
      <SmallLogo>JUKBOX</SmallLogo>
      <SubContainer>
        {renderRedirect()}
        {renderRedirectLogOut()};
        <SearchIcon type="search" style={{ color: 'var(--secondary-color)' }} onClick={handleOnSearch} />
        <Logout onClick={handleLogOut}>LOGOUT</Logout>
      </SubContainer>
    </Container>
  );
}

export default Header;
