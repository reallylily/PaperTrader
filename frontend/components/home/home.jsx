import React from 'react';
import NavContainer from '../nav/nav_container'
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    const { currentUser, logout } = this.props;
    const sessionLinks = () => (
      <nav className="login-signup">
        <nav className="signup">
          <Link to="/signup">Sign up</Link>
        </nav>
        <nav className="login">
          <Link to="/login">Log In</Link>
        </nav>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <button className="header-button-logout" onClick={logout}>Log Out</button>
        <h2 className="header-name">{currentUser.username}</h2>
      </hgroup>
    );
    const nav = () => (
      <header>
      <Link to="/" className="header-link">
        {/* <img className="header-image" src={window.images.moneybags}/> */}
        <img className="header-image" src={window.images.logo}/>
        <h1 className="header-text">papertrader</h1>
      </Link>
      { currentUser ? personalGreeting() : sessionLinks() }
      </header>
    )
  
    return (
      <div>
        {/* <NavContainer/> */}
        {this.props.match.path === '/login' || this.props.match.path === '/signup' ? null : nav() }

      </div>
    )
  } // render
} // class


export default Home;
