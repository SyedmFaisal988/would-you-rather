import React, { Component } from 'react';
import {connect} from 'react-redux'
import QuestionsActions from '../../store/Actions/QuestionsActions';
import UserActions from '../../store/Actions/UserActions'
import AllUserActions from '../../store/Actions/AllUserActions';
import './PollResult.css';

class PollResult extends Component {
    state = {
        totAnswer: 0,
        oneLength: 0,
        twoLength: 0,
        progress1: 0,
        progress2: 0,
        userChoice: -1,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const oneLength = nextProps.question.optionOne.votes.length
        const twoLength = nextProps.question.optionTwo.votes.length;
        const totAnswer = oneLength+twoLength;
        const progress1 = ((oneLength*100)/totAnswer).toFixed(2);
        const progress2 = ((twoLength*100)/totAnswer).toFixed(2);
        var userChoice = nextProps.question.optionOne.votes.indexOf(nextProps.currentUser[0].id);
        if(userChoice<0){
            userChoice = nextProps.question.optionTwo.votes.indexOf(nextProps.currentUser[0].id);
            if(userChoice>=0){
                userChoice = 1
            }
        }else{
            userChoice = 0;
        }
        console.log('next ', nextProps, ' state ', prevState)
        
        return {
            ...prevState,
            totAnswer,
            oneLength,
            twoLength,
            progress1,
            progress2,
            userChoice,
        };
    }
    render() { 
        console.log( 'aeee result' , this.props)
        console.log('asadas ', this.props.usersAvatar[this.props.question.author]);
        return (
            <div className="poll-container">
                <div className="poll-wrapper z-depth-5">
                    <div className="poll-header grey lighten-2" >
                    Asked By {this.props.question.author}
                </div>
                <div className="poll-body" >
                    <div className="pic-body">
                        <div style={{backgroundImage: 'url("'+this.props.usersAvatar[this.props.question.author]+'")'}} className="poll-pic" ></div>
                    </div>
                    <div className="temp">
                        <h4 style={{padding: '0px', margin:'0px'}}><strong>Results:</strong></h4>
                    </div>
                    <PollOptions data={{
                        text: this.props.question.optionOne.text,
                        progress: this.state.progress1,
                        length: this.state.oneLength,
                        totAnswer: this.state.totAnswer,
                        index: 0,
                        userChoice: this.state.userChoice,
                    }}/>
                    <PollOptions data={{
                        text: this.props.question.optionTwo.text,
                        progress: this.state.progress2,
                        length: this.state.twoLength,
                        totAnswer: this.state.totAnswer,
                        index: 1,
                        userChoice: this.state.userChoice,
                    }}/>
                </div >
                </div>
                
            </div>  
        );
    }
}

function PollOptions(props){
    const status = (props.data.userChoice===props.data.index)? true: false;
    return (
        <div className={status?"poll-1-options poll-answer":"poll-1-options"}>
            <p style={{ textAlign: 'left' }}>Would you rather {props.data.text}</p>
            <div className={status?"progress-wrapper teal lighten-4":"progress-wrapper grey lighten-2"}>
                <div style={{ width: props.data.progress + "%" }} className={status?"poll-progress grey lighten-2":"poll-progress teal lighten-1"} >
                    {props.data.progress + "%"}
                </div>
            </div>
            <strong >{props.data.length} out of {props.data.totAnswer} votes</strong>
            <br></br>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        getCurrent: ()=>dispatch(QuestionsActions.getCurrent()),
        getUser: ()=>dispatch(UserActions.getUser()),
        getAllUserAvatar: ()=>dispatch(AllUserActions.getAllUserAvatar()),
    }
}

function mapStateToProps(state){
    return({
        question: state.QuestionsReducer.currentQuestion,
        currentUser: state.UserReducer.currentUser,
        usersAvatar: state.AllUserReducer.usersAvatar,
    })
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PollResult);