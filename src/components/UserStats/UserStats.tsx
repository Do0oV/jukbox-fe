import React from 'react';
import './UserStats.css';
import { useSelector } from 'react-redux';
import { UserStatsProps } from '../../types';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import { CenteredContent, AccountName, ListItem } from '../../assests/globalStyles';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const SubContainer = styled(ListItem)`
  margin: 10px 0;
  height: 100%;
  justify-content: space-around;
`;

const DiamondIcon = styled(Icon)`
  font-size: 50px;
  svg {
    color: var(--fourth-color);
  }

  svg:hover {
    opacity: .7;
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const TicketIcon = styled(Icon)`
  font-size: 50px;
  transform: rotate(90deg);
  svg {
    color: var(--fourth-color);
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;

  @media(min-width: 800px) {
    width: 250px;;
  }
`;

const CntrCol = styled(Col)`
  text-align: center;
`;

const UserName = styled(AccountName)`
  font-size: 14px;

  @media(min-width: 800px) {
    font-size: 20px;
    padding: 5px 25px;
  }
`;

const StyledAvatar = styled(Avatar)`
  color: var(--tertiary-color);
`;

const UserStats: React.FC<UserStatsProps> = ({ userStats }) => {
  const tickets = useSelector((state: any) => state.user.tickets);
  const userTickets = tickets > 0 ? tickets : 0;
  return (
    <Container>
      <SubContainer>
        <Badge showZero count={userTickets} style={{backgroundColor:'var(--tertiary-color)',
            color: 'var(--primary-bg-color)', fontSize: '15px', fontWeight: 'bold' }}>
          <TicketIcon type="book" theme="filled" />
        </Badge>
        <CntrCol>
          <StyledAvatar size={80} icon="user" style={{backgroundColor: 'var(--primary-color)'}}>Bob</StyledAvatar>
          <UserName>{userStats.name}</UserName>
        </CntrCol>
        <Badge showZero count={userStats.diamonds} style={{backgroundColor:'var(--secondary-color)',
            color: 'var(--primary-bg-color)', fontSize: '15px', fontWeight: 'bold' }}>
          <DiamondIcon type="sketch-circle" theme="filled" />
        </Badge>
        </SubContainer>
    </Container>
  );
}

export default UserStats;
