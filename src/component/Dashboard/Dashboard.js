import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import Navbar from '../Navbar/Navbar';
class Dashboard extends Component {

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
            <div>
                <Navbar name={this.props.currentUser[0].username} />
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