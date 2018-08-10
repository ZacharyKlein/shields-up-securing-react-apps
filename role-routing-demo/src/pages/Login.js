import React from 'react'
import {func} from 'prop-types'
import {Redirect} from 'react-router-dom'

const Login = ({loginUser, loginAdmin, loggedIn}) => {

  return loggedIn ? <Redirect to={{pathname: '/'}}/> : <div>
    <h1>Login</h1>
    <p>Non-logged in users should be able to view this content.</p>
    <p>Logged-in users should be redirected to "Home".</p>
    <div>
      <button onClick={loginUser}>Login as User</button>
      <button onClick={loginAdmin}>Login as Admin</button>
    </div>
  </div>
};

Login.propTypes = {
  loginUser: func,
  loginAdmin: func
};

export default Login;