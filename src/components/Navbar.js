import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
;
const NavbBarLink = ({to, label}) =>
(

  <li className="nav-item">
  <NavLink to={to} activeClassName="active" className="nav-link" >{label}</NavLink>
</li>

)

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >React Form</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <NavbBarLink to="/Login" label="Login" />
      <NavbBarLink to="/SignUp" label="SignUp" />



    </ul>

  </div>
</nav>
    );
  }
}

export default Navbar;
