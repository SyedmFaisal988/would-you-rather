import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import './Home.css';
import M from 'materialize-css';
import Questions from './Questions';
class Dashboard extends Component {
    state = {
        changeStatus: true,
    }
    componentDidMount() {
        var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {
        },0);

        this.props.getUser();
    }
    render() { 
        return (
            <div className="home-container" >
                <div className="home-wrapper z-depth-5" >
                    <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width tab-demo z-depth-1">
                        <li className="tab col s3"><a href="#test-swipe-1">Unanswered Question</a></li>
                        <li className="tab col s3"><a className="active" href="#test-swipe-2">Answered Question</a></li>
                    </ul>
                    <div style={{height: 'auto',display: 'block'}} id="test-swipe-1" className="col s12">
                        <Questions />
                    </div>
                    <div id="test-swipe-2" className="col s12">Test 2</div>
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