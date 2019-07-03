import React, { useState } from 'react';
import './Header.css';
import { Icon, Button } from 'antd';
import { SmallLogo } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cleanUpSearchState } from '../../redux/actions/';
// import { Button } from 'antd/lib/radio';

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
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logout = styled.button`
  width: 30%;
  background-color: black;
  border: 1px solid #abbdd9;
  border-radius: 6px
  color: #fff;
  font-size: 12px;
  padding: 5px;
  transition: .5s;
  margin-left: 10px;

  &:hover {
    border: 1px solid white;
    border-radius: 30px;
  }

  @media(min-width: 800px) {
    font-size: 16px;
    padding: 18px;
  }
`;
const Search = styled(Logout)`

`;

// const SearchIcon = styled(Icon)`
//   font-size: 24px;
//   font-weight: bold;
//   margin-right: 20px;
//   padding: 10px;
//   border: 1px solid transparent;
//   transition: .5s;

//   &:hover {
//     border: 1px solid var(--secondary-color);
//     color: var(--primary-bg-color);
//     border-radius: 50px;
//   }

//   @media(min-width: 800px) {
//     font-size: 28px;
//     padding: 20px;
//   }
// `;

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
    if (logOut) return <Redirect to='/' />
  }

  return (
    <Container className="Header">
      <SmallLogo>JUKBOX</SmallLogo>
      <SubContainer>
        {renderRedirect()}
        {renderRedirectLogOut()}
        <Search onClick={handleOnSearch}>Search</Search>
        <Logout onClick={handleLogOut}>Logout</Logout>
      </SubContainer>
    </Container>
  );
}

export default Header;
