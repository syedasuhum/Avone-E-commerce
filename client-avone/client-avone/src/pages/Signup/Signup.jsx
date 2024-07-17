import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
  const [firstname, setFirstnamename] = useState()
  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [number,setNumber]=useState()
  const [gender,setGender]=useState()

 
  const { loading, error } = useSelector((state) => state.user);
  
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3500/post',{firstname,lastname,email,password,number,gender})
    navigate('/')
    window.location.reload()
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname"  onChange={(e)=>setFirstnamename(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname"  onChange={(e)=>setLastname(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="text" id="number" name="number" onChange={(e)=>setNumber(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender"  onChange={(e)=>setGender(e.target.value)} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>
              <input type="checkbox" name="rememberMe"   />
              Accept the terms and Privacy Policy
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register Now'}
        </button>
        {error && <p className="error">{error}</p>}
        <p className="login-redirect">
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
