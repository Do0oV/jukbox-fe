import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router'
import './LoginVenue.css';
import { setAccessToken } from '../../redux/actions/setAccessToken';
import { setLogIn } from '../../redux/actions/setLogIn';
import { useSelector, useDispatch } from 'react-redux';

const LoginVenue: React.FC = (props) => {

  const accesToken = useSelector((state: any) => state.access_token);
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const dispatch = useDispatch();

  const accessToken:string = localStorage.getItem('access_token') || '';

  const adminLogIn = () => {
    // redirect to BE URL need to be changed
    window.location.href = 'http://localhost:3001/authorized-admin?access_token=BQBmJ_2zVCrL1FoEaYlKisGnYcinSwB0FMM7xkhdrly1TSHgutbhhU7dwVldv6J8CvcPdx5LwlKuBuw-WZRSK-3baPmNiU-gg5ETNzJ9YXcqwYqc443Uw4JDvME5lt-8dRHmDzBjQelCRUPfbiNghip8aEH5ur4FFRQJ'
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
