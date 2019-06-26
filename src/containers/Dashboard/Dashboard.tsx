import React, { useEffect } from 'react';
import './Dashboard.css';
import { LoginProps } from '../../types';
import { getUserStats } from '../../redux/actions/getUserStats'
import { useSelector, useDispatch } from 'react-redux';

const Dashboard: React.FC<LoginProps> = ({ match }) => {

  const userStats = useSelector((state: any) => state.api.userStats)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserStats())
  }, [])
  
  console.log(userStats)

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <h2>{ 'name:  ' + userStats.name }</h2>
      <h2>{ 'email:  ' + userStats.email }</h2>
      <h2>{ 'tickets:  ' + userStats.tickets }</h2>
      <h2>{ 'diamonds:  ' + userStats.diamonds }</h2>
    </div>
  );
}

export default Dashboard;