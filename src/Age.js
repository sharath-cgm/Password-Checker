import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Age.css';

class Age extends Component {

constructor(props){
  super(props);
  this.state = {name: '',
                age:''
                };

  this.handleChangeAge = this.handleChangeAge.bind(this);
  this.handleChangeName=this.handleChangeName.bind(this);               

   this.handleSubmit = this.handleSubmit.bind(this);

}

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }


  handleChangeAge(event) {
    this.setState({age: event.target.value});
  }


handleSubmit(event) {
    alert('Hello ' + this.state.name + ', your age is '+ this.state.age);
    event.preventDefault();
  }

  render() {
    var string=this.state.string;
    return (
        <div className="App">

        <div className="App-form">

        <form onSubmit={this.handleSubmit}>
        <label>
        Name:
       <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <br/>

         <label>
        Age:
        <input type="number" value={this.state.age} onChange={this.handleChangeAge}/>
        </label>
        <br/>


        <input type="submit" value="OK"/>
        </form>
        


        </div>
        </div>
        );
      }
    }

    export default Age;
