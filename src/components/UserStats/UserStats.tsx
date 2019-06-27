import React from 'react';
import './UserStats.css';
import { UserStatsProps } from '../../types';

const UserStats: React.FC<UserStatsProps> = ({ userStats }) => {
  return (
    <div className="UserStats">
      <br/>
      <br/>
      <h1>User Stats:</h1>
      <h2>{'name:  ' + userStats.name}</h2>
      <h2>{'email:  ' + userStats.email}</h2>
      <h2>{'tickets:  ' + userStats.tickets}</h2>
      <h2>{'diamonds:  ' + userStats.diamonds}</h2>
    </div>
  );
}

export default UserStats;
