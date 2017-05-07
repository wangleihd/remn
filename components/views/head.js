import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Head extends Component {
  render(){
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Button bsStyle="primary">确定</Button>
      </div>
    )
  }

}

module.exports = Head;
