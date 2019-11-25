import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import home from '../view/home/index';
import Public from '../view/public/index';
import history from "./history";

const BasicRoute = () => (
    <Router history  = {history}>
        <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/Public" component={Public}/>
        </Switch>
    </Router>
);


export default BasicRoute;