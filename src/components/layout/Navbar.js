import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

const NavBarLink = ({ to, label})  => (

  <li className="nav-item">
  <NavLink to={to} activeClassName="active" className="nav-link">{label}</NavLink>
</li>
)

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <NavBarLink to={"/home"} className="navbar-brand" label="React Form"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <NavBarLink to={"/Login"} label="تسجيل دخول"/>
            <NavBarLink to={"/SignUp"} label="تسجيل جديد"/>


          </ul>

        </div>
      </nav>
    );
  }
}

export default Navbar;
