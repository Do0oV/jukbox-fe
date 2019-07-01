import React from 'react';
import './UserStats.css';
import { UserStatsProps } from '../../types';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import { CenteredContent, AccountName } from '../../assests/globalStyles';
import styled from 'styled-components';

const Container = styled(CenteredContent)`
  @media(min-width: 800px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

const DiamondIcon = styled(Icon)`
  font-size: 40px;
  svg {
    color: var(--fourth-color);
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const TicketIcon = styled(Icon)`
  font-size: 40px;
  transform: rotate(90deg);
  svg {
    color: var(--fourth-color);
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const StyledBadge = styled(Badge)`
  font-size: 20px;

  @media(min-width: 800px) {
    font-size: 40px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const CntrCol = styled(Col)`
  text-align: center;
`;

const UserName = styled(AccountName)`
  font-size: 14px;
  margin: 0 0 40px 0;

  @media(min-width: 800px) {
    font-size: 20px;
    padding: 5px 25px;
  }
`;

const StyledAvatar = styled(Avatar)`
  color: var(--tertiary-color);
`;

const UserStats: React.FC<UserStatsProps> = ({ userStats }) => {
  return (
    <Row className="UserStats" type="flex" justify="space-around" align="middle">
      <Col>
        <IconContainer>
          <Badge count={1} style={{backgroundColor:'var(--tertiary-color)'}}>
            <TicketIcon type="book" theme="filled" />
          </Badge>
          <Badge count={5} style={{backgroundColor:'var(--secondary-color)', height: '20px'}}>
            <DiamondIcon type="sketch-circle" theme="filled" />
          </Badge>
        </IconContainer>
      </Col>
      <CntrCol>
        <StyledAvatar size={70} icon="user" style={{backgroundColor: 'var(--primary-color)'}}>Bob</StyledAvatar>
        <UserName>Bob</UserName>
      </CntrCol>
    </Row>
  );
}

export default UserStats;
