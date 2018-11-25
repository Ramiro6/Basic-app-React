import React, { Component } from 'react';
import EntrancePost from '../components/post-entrances.jsx';
import './card.css';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class CardPost extends Component {

  componentDidMount() {
    console.log(this.props.fetchPost())
  }

  render(){
    return(
      <div className='father-card d-flex flex-column justify-content-center'>
        <h1 className='d-flex justify-content-center'>Componente hijo</h1>
        <hr />
         <EntrancePost />
      </div>
    )
  }

  // const mapStateToProps = ()
}

export default connect(null, { fetchPost })(CardPost);
