'use strict';

var React = require('react');
var Name = require('./name.jsx')

module.exports = React.createClass({
  addNames: function(){
      return this.props.data.map(function(name){
        <Name data={name} />
      });
  },
  render: function(){
    return(
      <ul>
        {this.addNames}
      </ul>
    );
  }
});
