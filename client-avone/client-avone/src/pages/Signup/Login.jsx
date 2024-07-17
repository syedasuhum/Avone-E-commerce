import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userdata, setData] = useState([])
  const [buttonText, setButtontext] = useState('Login')
  const [activeUserData, setActiveUserData] = useState([])
  const [profileData, setProfiledata] = useState([])
  const submit = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:3500/login/${email}/${password}`)
      .then(result => {
        setData(result.data)
      })

    setButtontext('Loading...')
    setTimeout(() => {
      setButtontext('Login')
      if (userdata.message === 'success') {
        window.alert('login success')
        history('/')
        localStorage.setItem("userData", [userdata.data.email, userdata.data.firstname, userdata.data.lastname]);

      }
      if (userdata.message === 'failed') {
        window.alert('email or password is incorrect')
      }
    }, 3000);

  }
  useEffect(() => {
    const d = localStorage.getItem("userData");
    setProfiledata(d?.split(','))
    if (d?.split(',').length > 1) {
      setActiveUserData(true)
    } else {
      setActiveUserData(false)
    }
  }, [setProfiledata])
  const cleatLocalstorage=()=>{
    window.alert('you want to logout from this account')
    localStorage.userData = undefined;
    window.location.reload()
  }
  if (activeUserData === false) {
    return (

      <div className="login-container">

        <form className="login-form" onSubmit={submit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>

          <button type="submit" className="submit-button" >{buttonText}</button>

        </form>
        <form className="login-form" >
          <h2>NEW CUSTOMER?</h2>
          <p style={{ margin: "2rem 2rem 2.7rem  0 " }}>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
          <Link to="/signup"> <button type="submit" className="submit-button">Create Account</button></Link>

        </form>
      </div>

    );
  } else {
    return (
      <div className='user_profile_details'>

        <div className='profile_data'>
          <div>
            <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
          </div>
          <div>
            {profileData[1]} {profileData[2]}
          </div>
          <div>
            {profileData[0]}
          </div>
        </div>
        <div>
          <Link to='/CartPage'>View Cart</Link>
        </div>
        <div>
          <Link to='/wishlist'>View WishList</Link>
        </div>
        <div onClick={cleatLocalstorage} className='logout'>
          Log out
        </div>
      </div>

    )
  }
};

export default Login;
