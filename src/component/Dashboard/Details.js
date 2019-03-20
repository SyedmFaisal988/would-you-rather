import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import AllUserActions from '../../store/Actions/AllUserActions';

class Details extends Component {
    state = {  }
    
    render() { 
        console.log('details ', this.props)
        return (
        <div></div>
        );
    }
}
 
function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser()),
    }
}

function mapStateToProps(state){
    return({
        Questions: state.QuestionsReducer,
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);