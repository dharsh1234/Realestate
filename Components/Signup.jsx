import React, { useState } from 'react';
import './Signup.css'; 


  const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = () => {
      if (!firstName.trim() || !lastName.trim() || !email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('Please fill in all fields');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match');
      } else {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

      }
    };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder='Enter your Firstname'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder='Enter your lastname'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='email@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder='Retype your password here '
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br>
        </br>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;