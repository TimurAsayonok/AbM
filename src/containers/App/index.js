import React, {Component} from 'react';
import NavLink from '../../components/NavLink';
import { connect } from 'react-redux'
import './styles';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
          <li><NavLink to='/admin'>Admin</NavLink></li>
          <li><NavLink to='/list'>List of Genre</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
