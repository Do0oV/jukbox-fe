import React from 'react';
import './VenueInfos.css';
import styled from 'styled-components';
import { CenteredContent, AccountName } from '../../assests/globalStyles';
import { Avatar } from 'antd';

const NameSpace = styled(AccountName)`
  font-size: 14px;
  margin: 0 0 40px 0;

  @media(min-width: 800px) {
    font-size: 20px;
    padding: 5px 25px;
  }
`;

const VenueStats: React.FC = () => {

  const venueName = 'Codeworks';
  return (
    <CenteredContent className="VenueStats">
      <Avatar size={60} icon="user" style={{backgroundColor: 'var(--primary-color)'}}></Avatar>
      <NameSpace>/Codeworks</NameSpace>
    </CenteredContent>
  );
}

export default VenueStats;
