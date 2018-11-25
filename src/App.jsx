import React, { Component } from 'react';
import NavBar from './shared/components/nav-bar.jsx';
import CardPost from './posts/containers/card-post.jsx';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <div className='container'>
          <CardPost />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    state: state.data
  }
}

export default connect(mapStateToProps)(App);
