import React from 'react';
import './VenueInfos.css';
import styled from 'styled-components';
import { CenteredContent, AccountName } from '../../assests/globalStyles';
import { Avatar } from 'antd';


const VenueStats: React.FC = () => {

  const venueName = 'Codeworks';
  return (
    <CenteredContent className="VenueStats">
      <Avatar size={60} icon="user" style={{backgroundColor: 'var(--primary-color)'}}></Avatar>
    </CenteredContent>
  );
}

export default VenueStats;
