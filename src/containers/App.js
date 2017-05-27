import React, {Component} from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/list'>List of Genre</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}

export default App;
