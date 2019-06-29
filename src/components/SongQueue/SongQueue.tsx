import React from 'react';
import './SongQueue.css';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 20px;
`;

const SongQueue: React.FC = () => {
  return (
    <Container className="SongQueue" />
  );
}

export default SongQueue;
