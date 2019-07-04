import React, { useEffect, useState } from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList'
import { Input, Icon } from 'antd';
import styled from 'styled-components/macro';
import { getUserProfile } from '../../redux/actions/';
import { Redirect } from 'react-router-dom'

const { Search } = Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display:inline;
`

const StyledBackIcon = styled(Icon)`
font-size: 30px;
padding: 10px 0px 0px 20px;
  svg {
    fill: var(--secondary-color);
  }
`

const StyledSearchBar = styled(Search)`
  padding: 8px 20px;
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
`;

const SearchContainer: React.FC = () => {

  const [goBackFlag, setGoBackFlag] = useState(false);

  const loggedIn = localStorage.getItem('access_token') && true;

  const handleGoBack = () => {
    setGoBackFlag(true)
  }

  const searchResults = useSelector((state: any) => state.searchResults.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  const renderRedirect = () => {
    if (goBackFlag) return <Redirect to='/dashboard' />
  }

  const redirectToLogIn = () => {
    if (!loggedIn) return <Redirect to='/' />
  }

  return (
    <Container>
      {renderRedirect()}
      {redirectToLogIn()}
      <StyledBackIcon type="close-circle" theme="filled" onClick={handleGoBack}/>
      <StyledSearchBar allowClear placeholder="Search Songs" onChange={handleChange} style={{ width: "85%" }} enterButton />
      {searchResults ? <SearchResList songs={searchResults} /> : null}
    </Container>
  );
}

export default SearchContainer;
