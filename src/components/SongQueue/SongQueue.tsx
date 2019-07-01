import React from 'react';
import { useSelector } from 'react-redux'
import './SongQueue.css';
import styled from 'styled-components';
import SongQueueItem from '../SongQueueItem/SongQueueItem'

const SongQueue: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResults.songs);

  return (
    <SongQueueItem />
  );
}

export default SongQueue;
