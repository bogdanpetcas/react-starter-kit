import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showToast } from 'actions/toast';

class Home extends React.Component {
  componentDidMount() {
    this.props.showToast({
      message: 'Welcome!'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>React app starter kit</h1>
        <h3>Features</h3>
        <p>- .scss support</p>
        <p>- routing</p>
        <p>- redux</p>
        <p>- webpack bundling</p>
        <p>- watch mode</p>
        <p>- ability to serve the output folder using http-server</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.router.location }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showToast }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
