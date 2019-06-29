import React from 'react';
import './SongQueueItem.css';
import { Row, Col } from 'antd';

const SongQueueItem: React.FC = () => {
  return (
    <Row className="SongQueueItem" type="flex" justify="space-between">
      <Col span={4}>AlbumCover</Col>
      <Col span={16}>Artist</Col>
      <Col span={2}>Song</Col>
      <Col span={2}>Diamonds</Col>
    </Row>
  );
}

export default SongQueueItem;
