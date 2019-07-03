import React from 'react';
import './SongQueue.css';
import styled from 'styled-components/macro';
import SongQueueItem from '../SongQueueItem/SongQueueItem';

const ListContainer = styled.div`
height: 87vh;
overflow: hidden;
overflow-y: scroll;
`
const SongQueue: React.FC<{ songQueueItems: any }> = ({ songQueueItems }) => {
  return (
    <ListContainer>
      {(songQueueItems && songQueueItems.length)
        ? songQueueItems.map((songQueueItem: any, id: number) => <SongQueueItem key={id} songQueueItem={songQueueItem} />)
        : null
      }
    </ListContainer>
  );
}

export default SongQueue;
