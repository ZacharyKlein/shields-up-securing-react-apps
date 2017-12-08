import React, { Component } from 'react';

class SettingInnerHtml extends Component {

  constructor() {
    super();

    this.state = {
      content: ``
    }
  }

  render() {

    const htmlString = "This content contains some <b>HTML</b>";
    const scriptString = "This content contains a hidden<img src=/x onerror=\"alert('gotcha!');\" /> script.";

    return (
      <div>
        <h2>Setting InnerHtml</h2>
        <label>Enter some content to render in the paragraph below:</label><br/>
        <textarea value={this.state.content}
                  style={{width: '500px', height: '100px'}}
                  onChange={(e) => this.setState({content: e.target.value})}
                  placeholder="Enter some content..." />
        <br/>
        <br/>
        <label>XSS Examples:</label><br/>
        <input defaultValue={htmlString} style={{width: 500}} /><br/>
        <input defaultValue={scriptString} style={{width: 500}}  />
        <hr />
        <h3>Content will be rendered below:</h3>
        <p dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default SettingInnerHtml;
