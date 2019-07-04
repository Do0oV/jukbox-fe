import React from 'react';
import './VenueInfos.css';
import styled from 'styled-components';
import { CenteredContent, AccountName } from '../../assests/globalStyles';
import { Avatar } from 'antd';


const VenueStats: React.FC = () => {

  const venueName = 'Codeworks';
  return (
    <CenteredContent className="VenueStats">
      <Avatar size={60} src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4898/s300/codeworks-logo.png'></Avatar>
    </CenteredContent>
  );
}

export default VenueStats;