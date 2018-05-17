import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Age from './Age';
import Stringcheck from './Stringcheck';
import Header from './Header';
import Home from './Home';


class App extends Component {

constructor(props){
  super(props);
  this.state = {name: '',
                age:'',
                string:''
                };

  

}

  
  render() {
    return (
    	<div>

        <BrowserRouter>
        <div className="mapping to nextpage">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/age" component={Age} />
        <Route path="/stringcheck" component={Stringcheck} />
        </div>

        </BrowserRouter>

        </div>
        );
}
}

export default App;



