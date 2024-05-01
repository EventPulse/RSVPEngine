import React, { useState } from 'react';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useOutletContext();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('some link', {
        method: 'POST',
        headers: {
          'Content-Type': 'applcation/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const user = await response.json(); // username will be move up to other components
      // some conditional to check if login was successful from backend
      if ('user login successful') {
        setUser(user);
        navigate('/form');
      } else {
        ('Username and/or password incorrect');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input type='text' onChange={handleUsername} value={username}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' onChange={handlePassword} value={password}></input>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
