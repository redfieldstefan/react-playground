'use strict';

var React = require('react');
var GreetForm = require('./components/greet_form.jsx');
var NameList = require('./components/name_list.jsx');

var App = React.createClass({
	updateName: function(newGreet) {
		this.props.names.push(newGreet);
		this.setState({greet: newGreet});
	},
	getInitialState: function() {
    return {greet: "YOU"};
  },
	render: function() {
		return(
			<main>
				<h1>HEY THERE BIG <em>{this.state.greet}</em>!</h1>
				<GreetForm save={this.updateName} buttonTxt='How are you?'/>
				<h2>Who have you said hi to?</h2>
				<NameList data={this.props.names}/>
			</main>
		);
	}
});

React.render(
	<App names={[]}/>,
	document.body.getElementsByTagName('article')[0]
);
