import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import { Router, Route} from 'react-router';

// class Index extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }

var Index = React.createClass({
  render(){
    return (
      <div>
      <h1>Hello</h1>
      <Head name="React">
        React
      </Head>

      </div>
    );
  }
})


ReactDOM.render(
  <Index />,
  document.getElementById('react-root')
);
