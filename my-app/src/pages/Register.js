import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/context/AuthContext';

function Register() {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        // console.log(data.error);
        if (data.success) {
            // Login successful, perform necessary actions (e.g., redirect, update user state)
            setMessage(data.success);
             console.log('Signup successfull');
          } else if (data.error) {
            // Login unsuccessful, display error message to the user
            setMessage(data.error);
            console.log('Login unsuccessful:', data.error);
          } else if (data.warning) {
            // Missing fields, display warning message to the user
            setMessage(data.warning);
            console.log('Missing fields:', data.warning);
          }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <form classname = "row g-3"onSubmit={handleSubmit} action="#" method="POST">
      
      <h1 className="h3 mb-3 fw-normal">Signup Here!</h1>

      <div className="form-floating">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          id="floatingInput"
          placeholder="Name"
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default Register;
