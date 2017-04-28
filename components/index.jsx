var React = require('react');
var DefaultLayout = require('./views/head.jsx');


var HelloMessage = React.createClass({

  render: function(){
    return (
      <DefaultLayout title={this.props.title}>
        <div id='abc' >Welcome to {this.props.name}</div>
       </DefaultLayout>
    )
  }
});

module.exports = HelloMessage;
