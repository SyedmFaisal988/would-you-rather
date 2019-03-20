import React from 'react';
import { connect } from 'react-redux';
import UserActions from '../../store/Actions/UserActions';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props){
    const logoutHandler = ()=>{
        props.setUser(null);
    }
    return(
        <nav>
            <div className=" teal lighten-1 nav-wrapper">
                <a href="#!"  className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/"><i className="material-icons left">home</i>Home</Link></li>
                    <li><Link to="/newquestion"><i className="material-icons left">library_add</i>New Question</Link></li>
                    <li><Link to="/leaderboard" ><i className="material-icons left">view_list</i>Leader Board</Link></li>
                    {props.currentUser!==null && props.currentUser!==null? 
                    <li className="user-nav">
                        <div className="user-pic" style={{backgroundImage:'url("'+props.name[0].avatarURL+'")'}}>
                        </div>  Hello {props.name[0].username}</li> :""}
                    {props.currentUser!==null && props.currentUser!==null? 
                    <li onClick={logoutHandler} ><a><i className="large material-icons left">lock_outline</i>Logout</a></li> :""}
                </ul>
            </div>
        </nav>
    )
}
function mapDispatchToProps(dispatch){
    return{
        setUser: (currentUser)=>dispatch(UserActions.setUser()),
        getUser: ()=>dispatch(UserActions.getUser()),
    }
}
function mapStateTpProps(state){
    return{
        currentUser: state.UserReducer.currentUser,
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(Navbar);