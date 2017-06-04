import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

class Index extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <Head name="React">
        </Head>
        <hr></hr>
        <Foot></Foot>
      </div>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('react-root')
);
