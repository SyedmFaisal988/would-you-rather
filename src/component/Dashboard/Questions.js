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
        console.log('props ',this.props)
        this.props.getAllUserAvatar();
        this.setState({
            currentUser: this.props.currentUser,
        })
    }
    render() { 
        const questions = this.props.allQuestions;
        //var quest = Array.from(questions);
        var quest = [];
        if(this.props.usersAvatar!==undefined )
        for(var question in questions){
            console.log('URl ', questions[question].author)
            quest.push({
                name: questions[question].author,
                avatarURL: this.props.usersAvatar[questions[question].author],    
                key: question,
            });
        }
        console.log(quest)
        return (    
            <div >
                {
                    quest.length>0?quest.map(ques=><Question key={ques.key} name={ques.name} avatarURL={ques.avatarURL} />):<p>Null th</p>
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