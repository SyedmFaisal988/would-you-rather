import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
class Dashboard extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('next prop ',nextProps);
    }
    componentDidMount() {
        this.props.getUser();
        console.log('prop das ', this.props)
    }
    render() { 
        return (
            <div>
                <p>Hello</p>
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