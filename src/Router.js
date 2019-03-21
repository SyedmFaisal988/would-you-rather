import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserActions from './store/Actions/UserActions';
import Login from './component/Login/Login';
import Home from './component/Dashboard/Home';
import Navbar from './component/Navbar/Navbar';
import NewQuestion from './component/Dashboard/NewQuestion';
import LeaderBoard from './component/Dashboard/LeaderBoard';
import Details from './component/Dashboard/Details';
import Result from './component/Dashboard/PollResult';

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
                <Navbar name={this.state.currentUser} />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrviateRoute exact path="/" currentUser={this.state.currentUser} component={Home} />
                    <PrviateRoute exact path="/newquestion" currentUser={this.state.currentUser}  component={NewQuestion} />
                    <PrviateRoute exact path="/leaderboard" currentUser={this.state.currentUser}  component={LeaderBoard} />
                    <PrviateRoute exact path="/question/:question_id" currentUser={this.state.currentUser}  component={Details} />
                    <PrviateRoute exact path="/result" currentUser={this.state.currentUser}  component={Result} />
                </Switch>
            </BrowserRouter>
          );
    }
}

const PrviateRoute = ({ component: Component,currentUser,...rest})=>{
    if(currentUser!==null && currentUser!==undefined){
        return <Route {...rest} render={(props)=> <Component {...props}/>} />
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