import React from 'react';
import './Dashboard.css';
import { LoginProps } from '../../types';

const Dashboard: React.FC <LoginProps> = ({ match }) => {
  console.log(match)

  return (

    <div className="Dashboard">
      Dashboard
    </div>
  );
}

export default Dashboard;
