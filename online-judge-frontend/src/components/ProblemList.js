import React, { Component } from 'react';
import '../Style.css';

class ProblemList extends Component {
  render() {
    return (
      <div>
        <h2>Problem List</h2>
        <ul>
          <li>
            <a href="/problems/1">Problem 1</a>
          </li>
          <li>
            <a href="/problems/2">Problem 2</a>
          </li>
          {/* Add more problems dynamically */}
        </ul>
      </div>
    );
  }
}

export default ProblemList;
