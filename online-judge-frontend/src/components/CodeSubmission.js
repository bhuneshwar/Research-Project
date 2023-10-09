import React, { Component } from 'react';
import '../Style.css';

class CodeSubmission extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
    };
  }

  handleChange = (event) => {
    this.setState({ code: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Implement code submission logic here
  };

  render() {
    return (
      <div>
        <h2>Code Submission</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="10"
            cols="50"
            placeholder="Enter your code here"
            value={this.state.code}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button type="submit">Submit Code</button>
        </form>
      </div>
    );
  }
}

export default CodeSubmission;
