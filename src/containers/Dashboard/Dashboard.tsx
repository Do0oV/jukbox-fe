import React, { useEffect } from 'react';
import './Dashboard.css';
import { LoginProps } from '../../types';
import { getUserStats } from '../../redux/actions/getUserStats'

const Dashboard: React.FC <LoginProps> = ({ match }) => {

useEffect(() => {
  getUserStats();
}, [])

  return (
    <div className="Dashboard">
      Dashboard
    </div>
  );
}

export default Dashboard;
