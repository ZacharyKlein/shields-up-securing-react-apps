import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({logout, history}) => {

  const logoutRedirect = (e) => {
    e.preventDefault();
    logout();
    history.push('/login');
  };

  return <nav style={{float: 'left', textAlign: 'left'}}>
    <h3>Navigation</h3>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/public">Public</Link></li>
      <li><Link to="/restricted">Restricted</Link></li>
      <li><Link to="/admin">Admin</Link></li>
      <li><a href='' onClick={logoutRedirect}>Logout</a></li>
    </ul>
  </nav>
}


const NavBarWithRouter = withRouter(NavBar);

export default NavBarWithRouter;