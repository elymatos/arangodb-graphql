import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

function introspectionProvider(query) {
    //return fetch(window.location.origin + '/graphql', {
    //return fetch('http://localhost:8529/_db/_system/demo' + '/graphql', {
        return fetch('http://localhost:8529/_db/_system/demo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query}),
    }).then(response => response.json());
}

ReactDOM.render(<Voyager
    introspection={introspectionProvider}
    workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
/>, document.getElementById('voyager'));

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
