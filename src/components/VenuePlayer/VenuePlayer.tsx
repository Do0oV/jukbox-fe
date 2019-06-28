import React from 'react';
//import './VenuePLayer.css';
import { VenuePLayerProps } from '../../types';

const VenuePLayer: React.FC<VenuePLayerProps> = ({current_song, startSession}) => {
  return (
    <div className="VenuePLayer">
    Player
      <button onClick={startSession}>START</button>
    </div>
  );
}

export default VenuePLayer;
