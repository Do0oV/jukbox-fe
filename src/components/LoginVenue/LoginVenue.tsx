import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router'
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/setAccessToken';
import { setLogIn } from '../../redux/actions/setLogIn';
import { useSelector, useDispatch } from 'react-redux';
const apiUrl = process.env.REACT_APP_API_URL;

const LoginVenue: React.FC = (props) => {

  const accesToken = useSelector((state: any) => state.access_token);
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = apiUrl;
    }
  }

  useEffect(()=> {
    if(accessToken){
      dispatch(setAccessToken(accessToken));
      dispatch(setLogIn());
    }
  },[accessToken])

  return (
    <div className="LoginVenue">
      {isLoggedIn && <Redirect to="/player"/>}
      <button onClick={() => adminLogIn()}>LOGIN</button>
    </div>
    );
}

export default LoginVenue;
