import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
          {/* <Route path="Login" Component={Login} />
          <Route path="SignUp" Component={SignUp} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
