import React, { useState } from 'react';
import './UserStats.css';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatsProps } from '../../types';
import { Col, Icon, Badge } from 'antd';
import { AccountName, ListItem } from '../../assests/globalStyles';
import styled from 'styled-components/macro';
import { buyDiamonds } from '../../redux/actions/index'
import { cleanUpSearchState } from '../../redux/actions/';
import { Redirect } from 'react-router-dom';
import Avatar from 'avataaars';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubContainer = styled(ListItem)`
width: 100%;
  justify-content: space-around;
`;

const DiamondIcon = styled(Icon)`
  font-size: 40px;
  svg {
    color: #5ab1bb;
  }

  svg:hover {
    opacity: .7;
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const TicketIcon = styled(Icon)`
  font-size: 40px;
    color: #5ab1bb;
  }

  @media(min-width: 800px) {
    font-size: 60px;
  }
`;

const CntrCol = styled(Col)`
  text-align: center;
  padding-left: 10px;
`;

const UserName = styled(AccountName)`
  font-size: 14px;

  @media(min-width: 800px) {
    font-size: 20px;
    padding: 5px 25px;
  }
`;

const StyledAvatar = styled(Avatar)`
  color: #f7dd72;
`;

const UserStats: React.FC<UserStatsProps> = ({ userStats }) => {

  const tickets = useSelector((state: any) => state.user.tickets);
  const userTickets = tickets > 0 ? tickets : 0;
  const dispatch = useDispatch()

  const [searchFlag, setSearchFlag] = useState(false);

  const handleOnDiamondClick = () => {
    dispatch(buyDiamonds());
  }

  const handleOnClickTicket = () => {
    setSearchFlag(true)
    dispatch(cleanUpSearchState())
  }

  const renderRedirect = () => {
    if (searchFlag) return <Redirect to='/search' />
  }

  return (
    <Container>
      <SubContainer>
        {renderRedirect()}
        <Badge showZero count={userTickets} style={{
          backgroundColor: '#f7dd72',
          color: 'var(--primary-bg-color)', fontSize: '11px', fontWeight: 'bold'
        }}>
          <TicketIcon type="plus-circle" theme="filled" onClick={handleOnClickTicket} />
        </Badge>
        <CntrCol>
          <Avatar
            style={{width: '100px', height: '100px'}}
            avatarStyle='Circle'
            topType='WinterHat4'
            accessoriesType='Kurt'
            hairColor='PastelPink'
            facialHairType='BeardMedium'
            facialHairColor='Brown'
            clotheType='BlazerSweater'
            clotheColor='White'
            eyeType='Dizzy'
            eyebrowType='AngryNatural'
            mouthType='Twinkle'
            skinColor='Brown'
          />
          <UserName>{userStats.name}</UserName>
        </CntrCol>
        <Badge showZero count={userStats.diamonds} style={{
          backgroundColor: 'var(--secondary-color)',
          color: 'var(--primary-bg-color)', fontSize: '11px', fontWeight: 'bold'
        }}>
          <DiamondIcon type="sketch-circle" theme="filled" onClick={handleOnDiamondClick} />
        </Badge>
      </SubContainer>
    </Container>
  );
}

export default UserStats;
