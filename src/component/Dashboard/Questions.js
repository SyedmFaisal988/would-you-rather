import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import UserActions from '../../store/Actions/UserActions';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import AllUserActions from '../../store/Actions/AllUserActions';
import Question from './Question';

class Questions extends Component {
    state = {  
        currentUser: null,
        quest: [],
    }
    componentWillMount(){
        
    }
    componentDidMount() {
        this.props.getAllUserAvatar();
        this.setState({
            currentUser: this.props.currentUser,
        })
    }
    render() { 
        const questions = this.props.allQuestions;
        var metaData = [];
        if(this.props.usersAvatar!==undefined)
        for(var question in questions){
            if(questions[question].optionOne.votes.indexOf(this.state.currentUser[0].id)<0 && questions[question].optionTwo.votes.indexOf(this.state.currentUser[0].id)<0)
            metaData.push({
                name: this.props.usersAvatar[questions[question].author+"1"],
                avatarURL: this.props.usersAvatar[questions[question].author],    
                key: question,
                quest: questions[question],
            });
        }
        return (    
            <div >
                {
                    metaData.length>0?metaData.map(ques=><Question key={ques.key} quest={ques.quest} name={ques.name} avatarURL={ques.avatarURL} />):<p>Null th</p>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state){
    return{
        currentUser: state.UserReducer.currentUser,
        allQuestions: state.QuestionsReducer.questions,
        usersAvatar: state.AllUserReducer.usersAvatar,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser()),
        getQuestions: ()=>dispatch(QuestionsActions.getQuestions()),
        getAllUserAvatar: ()=>dispatch(AllUserActions.getAllUserAvatar()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);