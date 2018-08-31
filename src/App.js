import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import { BrowserRouter, Route } from 'react-router-dom'


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
