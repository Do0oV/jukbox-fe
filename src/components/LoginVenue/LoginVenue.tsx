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
    window.location.href = 'http://localhost:3001/authorized-admin?access_token=BQATCvzW-rwDYDCLskrjG549NnD6teFfQY-FUsPL8-nQrted86jbPjPwsD72L16XWgTY_CIl1ODmxW0bw6T88oF9vPg5eWZ1xDA9x9j4pWadajybgGZVh57--c_lJw7y-o9RicxNiURNY7ywVMMQl-lxe_cqoMcSaSuY'
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
