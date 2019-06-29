import React from 'react';
import './UserStats.css';
import { UserStatsProps } from '../../types';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import styled from 'styled-components';

const DiamondIcon = styled(Icon)`
  font-size: 40px;
  color: var(--fourth-color);
`;

const TicketIcon = styled(Icon)`
  .anticon {
    color: var(--fourth-color);
  }
  font-size: 40px;
  transform: rotate(90deg);
`;

const StyledBadge = styled(Badge)`
  margin: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const CntrCol = styled(Col)`
  text-align: center;
`;

const UserName = styled.div`
  position: relative;
  top: -15px;
  padding: 5px;
  border-radius: 10px;
  background-color: var(--primary-bg-color);
  color: var(--fourth-color);
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
          <Badge count={5} style={{backgroundColor:'var(--secondary-color)'}}>
            <DiamondIcon type="sketch-circle" theme="filled" />
          </Badge>
        </IconContainer>
      </Col>
      <CntrCol>
        <StyledAvatar size={70} icon="user">Bob</StyledAvatar>
        <UserName>Bob</UserName>
      </CntrCol>
    </Row>
  );
}

export default UserStats;
