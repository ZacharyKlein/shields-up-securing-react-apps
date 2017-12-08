import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SettingInnerHtml from './SettingInnerHtml';
import InjectableAttributes from "./InjectableAttributes";
import LocalStorageFetch from "./LocalStorageFetch";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{margin: '0 auto', width: '80%'}}>
          <header>
            <h1>XSS React Demos</h1>
          </header>
          <nav style={{float: 'left', textAlign: 'left'}}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/inner">Inner HTML</Link></li>
              <li><Link to="/inject">Injected Attributes</Link></li>
              <li><Link to="/localstorage">LocalStorage</Link></li>
            </ul>
          </nav>

          <div style={{float: 'right'}}>
            <Route path="/" exact component={Home}/>
            <Route path="/inner" component={SettingInnerHtml}/>
            <Route path="/inject" component={InjectableAttributes}/>
            <Route path="/localstorage" component={LocalStorageFetch}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
