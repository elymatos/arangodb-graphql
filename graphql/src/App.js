import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import ReactDOM from "react-dom";
import {Voyager} from "graphql-voyager";
import fetch from 'isomorphic-fetch';
import GraphiQL from 'graphiql';

function App() {
    return (
        <Router>
            <div>
                <ul className="header">
                    <li><Link to="/voyager">Voyager</Link></li>
                    <li><Link to="/graphiql">GraphiQL</Link></li>
                    <li><Link to="/rover">Rover</Link></li>
                </ul>
                <div id="content" className="content">
                    <Route path="/voyager">
                        <Voyager
                            introspection={introspectionProvider}
                            workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
                        />
                    </Route>
                    <Route path="/graphiql">
                        <GraphiQL
                            fetcher={graphQLFetcher}
                        />
                    </Route>
                </div>
            </div>
        </Router>
    )
}


function introspectionProvider(query) {
    return fetch('http://localhost:8529/_db/_system/demo', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: query}),
    }).then(response => response.json());
}

function graphQLFetcher(graphQLParams) {
    return fetch('http://localhost:8529/_db/_system/demo', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}

export default App;
