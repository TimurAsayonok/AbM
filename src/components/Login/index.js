import React, { Component, PropTypes } from 'react'

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const router = this.context.router;

    e.preventDefault()
    const value = e.target.elements[0].value.toLowerCase()
    window.localStorage.setItem('site_login', value);
    console.log(window.localStorage);

    if(value === 'admin'){
      router.push('/admin');
    } else {
      router.push('/');
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Пожалуйста введите логин </div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='login' />
          <button type='submit'>Войти</button>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Login;
