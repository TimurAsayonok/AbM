import React, {Component} from 'react';
import { Link } from 'react-router';
import './styles';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><Link to='/admin' activeClassName='active'>Admin</Link></li>
          <li><Link to='/list' activeClassName='active'>List of Genre</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}

export default App;
