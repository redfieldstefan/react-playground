'use strict';

var React = require('react');

module.exports = React.createClass({
	handleChange: function(event){
		var greetCopy = this.state.greet;
		greetCopy = event.target.value;
    this.setState({greet: greetCopy});
  },
	handleSubmit: function(event) {
		event.preventDefault();
		React.findDOMNode(this.refs.newGreet).value = '';
		this.props.save(this.state.greet);
	},
	getInitialState: function() {
		return {greet: ''};
	},
	render: function(){
		return (
			<form name='greetForm' onChange={this.handleChange} onSubmit={this.handleSubmit}>
				<input type='text' ref='newGreet' defaultValue={this.state.greet} />
				<input type='submit' value={this.props.buttonTxt} />
			</form>
		);
	}
});

