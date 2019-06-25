import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import Login from '../../components/Login/Login';
import LoginVenue from '../../components/LoginVenue/LoginVenue'
import Dashboard from './../Dashboard/Dashboard';
import Player from './../Player/Player';
import Search from './../Search/Search';
import NotFound from '../../components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/loginvenue" component={LoginVenue} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/player" component={Player} />
        <Route path="/search" component={Search} />
        <Route path="/" component={SplashScreen} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
