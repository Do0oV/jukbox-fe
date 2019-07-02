import React from 'react';
import './UserStats.css';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatsProps } from '../../types';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import { CenteredContent, AccountName } from '../../assests/globalStyles';
import styled from 'styled-components';
import { WindowInterface } from '../../types';
import { buyDiamonds } from '../../redux/actions/index'

const Container = styled(CenteredContent)`
  @media(min-width: 800px) {
    width: 90vw;
    margin: 0 auto;
  }
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

  svg:hover {
    opacity: .7;
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

  const Stripe = (window as WindowInterface).Stripe;
  const stripe = Stripe('whsec_kQpAul8d4NFcYPMcJNnT9zgPlCsC9nez')
  const tickets = useSelector((state: any) => state.user.tickets);
  const userTickets = tickets > 0 ? tickets : 0;
  const dispatch = useDispatch()

  const handleOnDiamondClick = () => {
    dispatch(buyDiamonds())
  }

  return (
    <Row className="UserStats" type="flex" justify="space-around" align="middle">
      <Col>
        <IconContainer>
          <Badge showZero count={userTickets} style={{backgroundColor:'var(--tertiary-color)',
              color: 'var(--primary-bg-color)', fontSize: '15px', fontWeight: 'bold' }}>
            <TicketIcon type="book" theme="filled" />
          </Badge>
          <Badge showZero count={userStats.diamonds} style={{backgroundColor:'var(--secondary-color)',
              color: 'var(--primary-bg-color)', fontSize: '15px', fontWeight: 'bold' }}>
            <DiamondIcon type="sketch-circle" theme="filled" onClick={handleOnDiamondClick}/>
          </Badge>
        </IconContainer>
      </Col>
      <CntrCol>
        <StyledAvatar size={70} icon="user" style={{backgroundColor: 'var(--primary-color)'}}>Bob</StyledAvatar>
        <UserName>{userStats.name}</UserName>
      </CntrCol>
    </Row>
  );
}

export default UserStats;
