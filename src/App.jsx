import React, { Component } from 'react';
import NavBar from './shared/components/nav-bar.jsx';
import CardPost from './posts/containers/card-post.jsx';

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

export default App;
