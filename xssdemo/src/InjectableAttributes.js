import React, { Component } from 'react';

class InjectableAttributes extends Component {

  constructor() {
    super();

    this.state = {
      link: `http://google.com`
    }
  }

  render() {
    return (
      <div>
        <h2>Injecting a user-provided attribute</h2>
        <label>Enter a custom URL below (e.g, a link to a social media profile):</label><br/>
        <input value={this.state.link}
                  type='text'
                  style={{width: '500px'}}
                  onChange={(e) => this.setState({link: e.target.value})}/>
        <br/>
        <br/>
        <label>XSS Examples:</label><br/>
        <input defaultValue="javascript:alert('gotcha!')" style={{width: 500}} />
        <hr />
        <h3>Link will be rendered below:</h3>
        <a href={this.state.link}>User-provided Link</a>
      </div>
    );
  }
}

export default InjectableAttributes;
