import React from 'react'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
function Nav(props) {
  const userState = useSelector((state) => state.userReducer.user)

  return (
    <nav>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left">
          <li>
            <Link to="/">Race Bet</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            {userState.length ? <strong><Link to="/profile">{userState[0].name ? userState[0].name : null}</Link></strong> : <Link to="/profile">Profile</Link>}
          </li>
          <li>
            <Link to="/pictures">Pictures</Link>
          </li>
          <li>
            <Link to="/total">Total</Link>
          </li>
          <li className="nav-link">
            {userState.length ? <strong>Твой депозит: {userState[0].deposit ? userState[0].deposit : null}</strong> : null}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
