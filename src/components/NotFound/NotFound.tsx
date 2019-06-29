import React from 'react';
import './NotFound.css';
import styled from 'styled-components';
import { Icon } from 'antd';

import { BigLogo, CenteredContent } from '../../assests/globalStyles';

const Alert = styled.h1`
  margin: 0 0 25px 0;
  color: var(--secondary-color);
  font-size: 14px;
  letter-spacing: 5px;
  font-weight: bold;
`;

const NotFound: React.FC = () => {
  return (
    <CenteredContent className="NotFound">
        <BigLogo>JUKBOX</BigLogo>
        <Alert>NOT FOUND</Alert>
        <Icon type="home" theme="filled" style={{fontSize: '20px', color: 'var(--tertiary-color)'}} />
    </CenteredContent>
  );
}

export default NotFound;
