import React from 'react';
// import NavContainer from '../nav/nav_container'
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container'

class Nav extends React.Component {

  // componentDidMount(){
  //   if ( Object.values(this.props.stocks).length === 0 ) this.props.requestAllStocks()
  //   // debugger
  // }

  render() {

    const names = [
      'Abba',
      'Barney',
      'Barbara',
      'Jeff',
      'Jenny',
      'Sarah',
      'Sally',
      'Xander'
    ];

    const { history, currentUser, logout } = this.props;
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
        {/* <i class="fas fa-user" className="fas fa-user"></i> */}
        <button className="header-button-logout" onClick={logout}>Log Out</button>
        <h2 className="header-name">{currentUser.username}</h2>
        <SearchContainer names={names} history={history}/>
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
          {nav()}
      </div>
    )
  } // render
} // class


export default Nav;
