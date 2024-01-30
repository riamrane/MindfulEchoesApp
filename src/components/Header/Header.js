import React, { useContext, useEffect, useState } from 'react';
import { UserContext} from '../../UserContext';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {

  const {userInfo,setUserInfo}= useContext(UserContext);
  
  
  useEffect(() => {
    fetch('https://mindfulechoesserver.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://mindfulechoesserver.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;
  return (
    <header className='header-sec'>
      <Link to='/' className='logo'>MindfulEchoes</Link>
      <nav>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}

        {
          !username && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )
        }

      </nav>
    </header>
  )
}
