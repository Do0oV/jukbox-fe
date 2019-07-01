import React from 'react';
import './Search.css';
import { searchSongs, addSongToQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList'
import { Input } from 'antd';
import styled from 'styled-components';

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

  const searchResults = useSelector((state: any) => state.searchResults.songs)
  const userEmail = useSelector((state: any) => state.user.userProfile.email);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(searchSongs(event.currentTarget.value));
  }

  const handleOnClick = (song: any) => {
    const songId = song.song_id;
    dispatch(addSongToQueue(songId, userEmail));
  }

  return (
    <Container>
      <div>
        <StyledSearchBar placeholder="search songs" onChange={handleChange} style={{ width: 500 }}enterButton />
      </div>
      {(searchResults.songs && searchResults.songs.length)
        ? searchResults.songs
          .map((el: any, index: number) => <li key={index} value={el} onClick={() => handleOnClick(el)}>{el.title}</li>)
        : null
      }
      <SearchResList />
    </Container>
  );
}

export default SearchContainer;