import React from 'react';
import './NowPlaying.css';
import { Row, Col, Progress } from 'antd';
import styled from 'styled-components';

const RowHeader = styled(Row)`
  background-color: var(--secondary-bg-color);
  padding: 10px;
`;

const Song = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary-color);
`;

const Artist = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-bg-color);
`;

const Now = styled.h2`
  margin: 0;
  font-size: 22px;
  color: var(--fourth-color);
  font-style: italic;
`;

const RightCol = styled(Col)`
  text-align: right;
`;

const Album = styled.img`
  height: 85px;
  width: 85px;
`;

const NowPlaying: React.FC = () => {
  return (
    <RowHeader type="flex" justify="space-around" className="NowPlaying" align="middle">
     <Col>
       <Album src="https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2" />
     </Col>
     <RightCol>
       <Now>Now Playing</Now>
       <Song>Cut To The Feeling</Song>
       <Artist>Carly Rae Jepsen</Artist>
       <Progress percent={45} strokeWidth={2} showInfo={false} size="small" strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
     </RightCol>
    </RowHeader>
  );
}

export default NowPlaying;
