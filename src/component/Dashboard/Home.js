import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import './Home.css';
import M from 'materialize-css';
class Dashboard extends Component {
    state = {
        changeStatus: true,
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('next prop ',nextProps);
    //     return nextProps;
    // }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('update')
    }
    componentDidMount() {
        var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {
            swipeable: true
        },1);

        //this.props.getUser();
        console.log('mount');
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    render() { 
        console.log('rendering')
        return (
            <div className="home-container" >
                <div className="home-wrapper" >
                    <ul id="tabs-swipe-demo" class="tabs tabs-fixed-width tab-demo z-depth-1">
                        <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
                        <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
                    </ul>
                    <div id="test-swipe-1" class="col s12 blue">Test 1</div>
                    <div id="test-swipe-2" class="col s12 red">Test 2</div>
                </div>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"></img>
            </div>
            );
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser())
    }
}

function mapStateToProps(state){
    return({
        currentUser: state.UserReducer.currentUser,
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);