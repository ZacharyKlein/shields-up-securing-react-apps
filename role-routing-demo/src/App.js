import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from "./pages/Home";
import Public from "./pages/Public";
import Restricted from "./pages/Restricted";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Authorized from "./secure/Authorized";
import NavBar from "./layout/NavBar";

class App extends Component {


  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        role: ''
      }
    }
  }

  loginUser = () => this.setState({user: {role: 'user'}, loggedIn: true});
  loginAdmin = () => this.setState({user: {role: 'admin'}, loggedIn: true});
  logout = () => this.setState({user: {role: ''}, loggedIn: false});

  render() {
    const {user, loggedIn} = this.state;
    const withAdminRole = Authorized(['admin'], user);
    const withUserRole = Authorized(['user', 'admin'], user);

    return (
      <Router>
        <div className="App" style={{margin: '0 auto', width: '80%'}}>
          <header>
            <h1>Role-Based Routing</h1>
            <p>Currently logged in: <strong>{loggedIn ? 'yes' : 'no'}</strong></p>
            <p>Has Role: <strong>{user.role ? user.role : 'none'}</strong></p>
          </header>

          <NavBar logout={this.logout}/>

          <div style={{float: 'right', minWidth: '720px'}}>
            <Route path="/" exact component={Home}/>
            <Route path="/login" render={() => <Login loginUser={this.loginUser} loginAdmin={this.loginAdmin} loggedIn={loggedIn}/>}/>
            <Route path="/public" component={Public}/>
            <Route path="/restricted" component={withUserRole(Restricted)}/>
            <Route path="/admin" component={withAdminRole(Admin)}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
