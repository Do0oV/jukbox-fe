import React from 'react';
import './SearchResList.css';
import { CurrentSong } from '../../types';
import SearchResListItem from '../SearchResListItem/SearchResListItem';
import styled from 'styled-components';

const ListContainer = styled.div`
overflow: scroll;
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
