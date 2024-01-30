import React, { useContext, useState } from 'react'
import {Navigate} from 'react-router-dom';
import "./Login.css"
import Header from '../../components/Header/Header'
import { UserContext } from '../../UserContext';
export default function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(e) {
      e.preventDefault();
       const response= await fetch('https://mindfulechoesserver.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert('wrong credentials');
      }
    }
  
    if (redirect) {
      return <Navigate to={'/'} />
    }
    return (
        <main className='header-main'>
            <Header />
            <div className='login-container'>
                <form className="login"
                 onSubmit={login}
                 >
                    <h1>Login</h1>
                    <input type="text"
                        placeholder="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                         />
                    <button>Login</button>
                </form>
            </div>
        </main>
    )
}
