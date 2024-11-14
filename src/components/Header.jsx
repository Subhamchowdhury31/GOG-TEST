import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Header.css';
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'> Home </Link> | <Link to='/contact'> Contact </Link> | <Link to='/about'> About Us </Link> | <Link to='/login'> Login </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;



