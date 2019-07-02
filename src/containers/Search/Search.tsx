import React, { useEffect } from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList'
import { Input } from 'antd';
import styled from 'styled-components';
import { getUserProfile } from '../../redux/actions/';

const { Search } = Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSearchBar = styled(Search)`
  padding: 30px;
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
`;


const SearchContainer: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResults.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  return (
    <Container>
      <StyledSearchBar placeholder="search songs" onChange={handleChange} enterButton />
      {searchResults ? <SearchResList songs={searchResults} /> : null}
    </Container>
  );
}

export default SearchContainer;