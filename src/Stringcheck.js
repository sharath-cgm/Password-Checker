import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Stringcheck.css';

function Alphabetic(props){
	var alp, i, len;
	len=props.str.length;
	for(i=0;i<len;i++){
		alp=props.str.charCodeAt(i);

		if(
			(alp>64&&alp<91)||
			(alp>96&&alp<123)
			)
		return (<p>Alphabetic</p>);

	}
	return (<p>Not a alphabetic</p>);
}

function Numeric(props){
	var num, i, len;
	len=props.str.length;
	for(i=0;i<len;i++){
		num=props.str.charCodeAt(i);

		if
		(num>47&&num<58)
		return (<p>Numeric</p>);

	}
	return (<p>Not a numeric</p>);
}

function Specialchar(props){
	var splchar, i, len;
	len=props.str.length;
	for(i=0;i<len;i++){
		splchar=props.str.charCodeAt(i);

		if(
			(splchar>32&&splchar<48)||
			(splchar>57&&splchar<65)||
			(splchar>90&&splchar<97)||
			(splchar>122&&splchar<127)
			)
		return (<p>Special character</p>);

	}
	return (<p>No Special character</p>);
}


class Check extends React.Component{
	constructor(props){
		super(props);
		this.handleChangeString=this.handleChangeString.bind(this);
		this.state={string:''};
	}

	handleChangeString(event){
		this.setState({string:event.target.value});
	}

	render(){
		var string=this.state.string;

		return(
			<div>
			<div className="stringcheck">
			<fieldset>
			<legend>Enter the string</legend>
			<input type="text" value={string} onChange={this.handleChangeString}/>
			</fieldset>
			</div>

			<div className="functioncall">
			<Alphabetic str={string} />
			<Numeric  str={string} />
			<Specialchar str={string} />
			</div>

			</div>
			);
	}


}

export default Check;



