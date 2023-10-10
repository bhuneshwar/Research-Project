import React, { useState } from 'react';

function ProblemDetail() {
  // Define the problem statement and example input
  const problemStatement = `
    Problem Statement:
    Write a program in Python that calculates the factorial of a given integer.
    
    Input:
    A single integer 'n' (1 <= n <= 10) representing the number for which the factorial should be calculated.
    
    Output:
    The factorial of the input integer.
  `;

  return (
    <div>
      <h2>Problem Statement</h2>
      <pre>{problemStatement}</pre>

      <h2>Example Input</h2>
      <p>5</p>

      <h2>Example Output</h2>
      <p>120</p>

      <button> <a href="/submit/">Solve</a></button>
    </div>
  );
}

export default ProblemDetail;
