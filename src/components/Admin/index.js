import React, { Component } from 'react'

class Admin extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /admin</div>
      </div>
    )
  }

  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('site_login');
    if(login !== 'admin'){
      replace('/');
    }
  }
}

export default Admin
