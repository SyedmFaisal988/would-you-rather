import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import AllUserActions from '../../store/Actions/AllUserActions';
import './Details.css'

class Details extends Component {
    state = { 
        value: "",
    }
    changeHandler = (ev)=>{
        this.setState({
            value: ev.target.value,
        })
    }
    submitHandler = (ev)=>{
        ev.preventDefault();
        if(this.state.value=== ""){
            alert('you must select an option');
            return;
        }
        const data = {
            author: this.props.currentUser[0].id,
            option: this.state.value,
            id: this.props.question.id,
        }
        this.props.addAnswer(data);
        this.props.addUserAnswer(data);
        this.props.history.push('/result');
    }
    render() { 
        return (
            <div className="answ z-depth-5">
                <div className="answ-header grey lighten-2">{this.props.usersAvatar[this.props.question.author+"1"]} ask</div>
                <div className="answ-body">
                    <div style={{backgroundImage: 'url("' + this.props.usersAvatar[this.props.question.author] + '")' }} className="answ-author-pic">
                    </div>
                    <div className="left answer">
                        <h3 className="left">Would you Rather</h3>
                        <form  className="left" onSubmit={this.submitHandler}>
                            <p className="row left">
                                <label>
                                    <input name="group1" type="radio" value="optionOne" onChange={this.changeHandler} />
                                    <span>{this.props.question.optionOne.text}</span>
                                </label>
                            </p>
                            <br/>
                            <p style={{textAlign: 'left'}}>
                                <label>
                                    <input name="group1" type="radio" value="optionTwo" onChange={this.changeHandler}/>
                                    <span>{this.props.question.optionTwo.text}</span>
                                </label>
                            </p>
                            <button className="det-btn btn waves-effect waves-light right" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
function mapDispatchToProps(dispatch){
    return{
        getCurrent: ()=>dispatch(QuestionsActions.getCurrent()),
        getUser: ()=>dispatch(UserActions.getUser()),
        getAllUserAvatar: ()=>dispatch(AllUserActions.getAllUserAvatar()),
        addAnswer: (data)=>dispatch(QuestionsActions.addAnswer(data)),
        addUserAnswer: (data)=>dispatch(AllUserActions.addAnswer(data)),
    }
}

function mapStateToProps(state){
    return({
        question: state.QuestionsReducer.currentQuestion,
        currentUser: state.UserReducer.currentUser,
        usersAvatar: state.AllUserReducer.usersAvatar,
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Details);