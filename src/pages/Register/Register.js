import React, { useState } from 'react'
import './Register.css'
import Header from '../../components/Header/Header'
export default function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(e) {
    e.preventDefault();
    const response = await fetch('https://mindfulechoesserver.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <main className='header-main'>
      <Header />
      <div className='register-container'>
        <form className="register" 
        onSubmit={register}
        >
          <h1>Register</h1>
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
          <button>Register</button>
        </form>
      </div>
    </main>
  )
}
