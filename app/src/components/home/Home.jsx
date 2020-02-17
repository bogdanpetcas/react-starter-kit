import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>React app starter kit</h1>
        <h3>Features</h3>
        <p>- .scss support</p>
        <p>- routing</p>
        <p>- redux (with example)</p>
        <p>- bundling using webpack</p>
        <p>- watch mode</p>
        <p>- ability to serve the output folder using http-server</p>
      </div>
    );
  }
}

export default Home;
