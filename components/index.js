import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

class Index extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello {window.ejsname} </h1>
        <br />

        <h3>{userFromServer.name}</h3>
        <h3>{userFromServer.user}</h3>
        <h3>{userFromServer.sex}</h3>
        <h3>{userFromServer.age}</h3>
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
