import React from 'react';
import './SearchResList.css';
import { CurrentSong } from '../../types';
import SearchResListItem from '../SearchResListItem/SearchResListItem';
import styled from 'styled-components/macro';

const ListContainer = styled.div`
  margin-top: 20px;
  height: 87vh;
  overflow: hidden;
  overflow-y: scroll;
`
const SearchResList: React.FC<{ songs: Array<CurrentSong> }> = ({ songs }) => {
  return (
    <ListContainer>
      {(songs && songs.length)
        ? songs.map((song: CurrentSong, id: number) => <SearchResListItem key={id} song={song} />)
        : null
      }
    </ListContainer>    
  );
}

export default SearchResList;
