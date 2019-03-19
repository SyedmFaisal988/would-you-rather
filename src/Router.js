import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';

class Router  extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
          );
    }
}
 
export default Router;