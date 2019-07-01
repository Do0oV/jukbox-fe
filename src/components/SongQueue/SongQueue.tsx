import React from 'react';
import { useSelector } from 'react-redux'
import './SongQueue.css';
import styled from 'styled-components/macro';
import SongQueueItem from '../SongQueueItem/SongQueueItem'
import { CurrentSong } from '../../types';

const ListContainer = styled.div`
height: 87vh;
overflow: hidden;
overflow-y: scroll;
`
const SongQueue: React.FC<{ songs: Array<CurrentSong> }> = ({ songs }) => {

  return (
    <ListContainer>
      {(songs && songs.length)
        ? songs.map((song: CurrentSong, id: number) => <SongQueueItem key={id} song={song} />)
        : null
      }
    </ListContainer>
  );
}

export default SongQueue;
