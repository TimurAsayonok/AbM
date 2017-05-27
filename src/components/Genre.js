import React, { Component } from 'react'

class Genre extends Component {
  render() {
    console.log(this.props);
    let returnView;
    if(this.props.params.release) {
      returnView = (
        <div className='col-md-12'>{this.props.children}</div>
      )
    } else {
      returnView = (
        <div className='col-md-12'>Здесь будет список релизов</div>
      )
    }
    return (
      <div className='row'>
        <h3 className='col-md-12'>{this.props.params.genre}</h3>
        {returnView}
      </div>
    )
  }
}

export default Genre;
