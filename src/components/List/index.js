import React, { Component } from 'react'
// import { Link } from 'react-router'

class List extends Component {
  onYearBtnClick(e) {
    const { getPhotos } = this.props;
    console.log(e.target.innerText);
    getPhotos(e.target.innerText);
  }

  render() {
    console.log(this.props);
    const { year, photos, fetching } = this.props.listOfGenre;

    return (
      <div className='row'>
        <div className='col-md-12'>
          <h3> {year} </h3>
          <div>
            <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
            <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
            <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
          </div>
          {
            fetching ?
            <p>Loading ...</p>
            :
            <p>You have {photos.length} photos </p>
          }
        </div>
      </div>
    )
  }
}

export default List;
