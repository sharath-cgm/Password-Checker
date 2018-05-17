import React, { Component } from 'react';
import logo from './New_logo.png';
import './Home.css';

class Home extends Component{

render(){
 return (
        <div className="App">

		 <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to New_Webpage</h2>
          </div>

          </div>
          );
}
}

export default Home;