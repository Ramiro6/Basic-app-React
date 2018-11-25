import React, { Component } from 'react';
import EntrancePost from '../components/post-entrances.jsx';
import './card.css';

class CardPost extends Component {
  render(){
    return(
      <div className='father-card d-flex flex-column justify-content-center'>
        <h1 className='d-flex justify-content-center'>Componente hijo</h1>
        <hr />
        <EntrancePost />
      </div>
    )
  }
}

export default CardPost;
