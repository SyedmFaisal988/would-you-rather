import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserActions from './store/Actions/UserActions';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';

class Router  extends Component {
    state = {
        currentUser: null,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return{
            currentUser: nextProps.currentUser,
        }
    }
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrviateRoute exact path="/" currentUser={this.state.currentUser} component={Dashboard} />
                </Switch>
            </BrowserRouter>
          );
    }
}

const PrviateRoute = ({ component: Component,currentUser,...rest})=>{
    console.log(currentUser)
    if(currentUser!==null){
        return <Route render={()=> <Component/>} />
    }else{
        return <Route render={()=><Redirect to="/login"/> }/>
    }
}

function mapStateToProps(state){
    return{
        currentUser: state.UserReducer.currentUser,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Router);