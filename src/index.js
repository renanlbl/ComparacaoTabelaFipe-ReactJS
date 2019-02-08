import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from "../utilsUrls";

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App}/>
    </Router>,
    document.querySelector('[data-js="app"]')
)