import React from 'react';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';
import CodeSubmission from './components/CodeSubmission';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: window.location.pathname, // Initialize the route based on the current URL
    };
  }

  // Define a function to handle navigation
  navigateTo = (path) => {
    this.setState({ route: path });
    window.history.pushState({}, '', path);
  };

  render() {
    const { route } = this.state;

    // Render components based on the current route
    let content;
    if (route === '/') {
      content = <ProblemList navigateTo={this.navigateTo} />;
    } else if (route.startsWith('/problems/')) {
      content = <ProblemDetail navigateTo={this.navigateTo} />;
    } else if (route.startsWith('/submit/')) {
      content = <CodeSubmission navigateTo={this.navigateTo} />;
    } else {
      // Handle 404 or other routes here
      content = <div>Page not found</div>;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
