import React, {useEffect} from 'react';
import { Redirect } from 'react-router';
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/';
import { useDispatch } from 'react-redux';
const apiUrl = process.env.REACT_APP_API_URL;

const LoginVenue: React.FC = () => {

  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    // redirect to BE URL need to be changed
    if (apiUrl) {
    window.location.href = `${apiUrl}/login/admin`;
    }
  }

  useEffect(()=> {
    if(accessToken){
      dispatch(setAccessToken(accessToken));
    }
  },[])

  return (
    <div className="LoginVenue">
      {accessToken && <Redirect to="/player"/>}
      <button onClick={() => adminLogIn()}>LOGIN</button>
    </div>
    );
}

export default LoginVenue;