import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Login from './components/routes/Login';
import Navbar from './components/layout/Navbar';
import SignUp from './components/routes/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         <Navbar />
           <Route path="/login" component={Login}/>
           <Route path="/signUp" component={SignUp}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
