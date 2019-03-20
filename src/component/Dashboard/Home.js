import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import './Home.css';
class Dashboard extends Component {
    state = {
        changeStatus: true,
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('next prop ',nextProps);
    //     return nextProps;
    // }
    componentDidMount() {
        this.props.getUser();
        // console.log('prop das ', this.props)
    }
    render() { 
        return (
            <div className="home-container" >
                <div className="home-wrapper" >
                <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width ">
                    <li className="tab col s3"><a onClick={this.changeStatus} className={this.state.status?"active":""} href="#" >Library</a></li>
                    <li className="tab col s3"><a onClick={this.changeStatus} className={this.state.status?"":"active"} href="#" >My Reads</a></li>
                </ul>
                
                </div>
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