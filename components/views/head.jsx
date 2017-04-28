var React = require('react');

var DefaultLayout = React.createClass({
  render: function(){
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          <div>{this.props.children}</div>
          </body>
      </html>
    )
  }
})

module.exports = DefaultLayout
