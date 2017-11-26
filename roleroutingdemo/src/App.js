import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./Home";
import Public from "./Public";
import Restricted from "./Restricted";
import Admin from "./Admin";
import Login from "./Login";

class App extends Component {


  constructor() {
    super();
    this.state = {
      loggedIn: false,
      role: ''
    }
  }

  loginUser = () => {this.setState({role: 'user', loggedIn: true})}
  loginAdmin = () => {this.setState({role: 'admin', loggedIn: true})}
  logout = () => {this.setState({role: '', loggedIn: false})}

  render() {
    return (
      <Router>
        <div className="App" style={{margin: '0 auto', width: '80%'}}>
          <header>
            <h1>Role-Based Routing</h1>
          </header>
          <nav style={{float: 'left', textAlign: 'left'}}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/public">Public</Link></li>
              <li><Link to="/restricted">Restricted</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
          </nav>
          <div style={{float: 'right', minWidth: '720px'}}>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login} loginUser={this.loginUser} loginAdmin={this.loginAdmin}/>
            <Route path="/public" component={Public}/>
            <Route path="/restricted" component={Restricted}/>
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
