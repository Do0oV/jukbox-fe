import React, {useEffect} from 'react';
import { Redirect } from 'react-router';
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/setAccessToken';
import { setLogIn } from '../../redux/actions/setLogIn';
import { useSelector, useDispatch } from 'react-redux';
const apiUrl = 'http://localhost:4000/login/admin';
// const apiUrl = process.env.REACT_APP_API_URL;

const LoginVenue: React.FC = (props) => {

  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    console.log(apiUrl);
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
  },[])

  return (
    <div className="LoginVenue">
      {accessToken && <Redirect to="/player"/>}
      <button onClick={() => adminLogIn()}>LOGIN</button>
    </div>
    );
}

export default LoginVenue;