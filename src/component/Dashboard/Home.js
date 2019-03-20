import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserActions from '../../store/Actions/UserActions';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import AllUserActions from '../../store/Actions/AllUserActions';
import './Home.css';
import M from 'materialize-css';
import Question from './Question';
class Dashboard extends Component {
    state = {
        currentUser: null,
        quest: [],
    }
    componentDidMount() {
        var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {
        },0);
        this.props.getAllUserAvatar();
        this.props.getUser();
        this.setState({
            currentUser: this.props.currentUser,
        })
    }
    render() { 
        const questions = this.props.allQuestions;
        var unAnsData = [];
        var AnsData = [];
        if(this.props.usersAvatar!==undefined)
        for(var question in questions){
            if(questions[question].optionOne.votes.indexOf(this.state.currentUser[0].id)<0 && questions[question].optionTwo.votes.indexOf(this.state.currentUser[0].id)<0)
            unAnsData.push({
                name: this.props.usersAvatar[questions[question].author+"1"],
                avatarURL: this.props.usersAvatar[questions[question].author],    
                key: question,
                quest: questions[question],
            });
            else
            AnsData.push({
                name: this.props.usersAvatar[questions[question].author+"1"],
                avatarURL: this.props.usersAvatar[questions[question].author],    
                key: question,
                quest: questions[question],
            });
        }
        return (
            <div className="home-container" >
                <div className="home-wrapper z-depth-5" >
                    <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width tab-demo z-depth-1">
                        <li className="tab col s3"><a href="#test-swipe-1">Unanswered Question</a></li>
                        <li className="tab col s3"><a className="active" href="#test-swipe-2">Answered Question</a></li>
                    </ul>
                    <div style={{height: 'auto',display: 'block'}} id="test-swipe-1" className="col s12">
                        {unAnsData.length>0?unAnsData.map(ques=><Question key={ques.key} quest={ques.quest} name={ques.name} avatarURL={ques.avatarURL} />):<p>Null th</p>}
                    </div>
                    <div id="test-swipe-2" className="col s12">
                        {AnsData.length>0?AnsData.map(ques=><Question key={ques.key} quest={ques.quest} name={ques.name} avatarURL={ques.avatarURL} />):<p>Null th</p>}
                    </div>
                </div>
            </div>
            );
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser()),
        getQuestions: ()=>dispatch(QuestionsActions.getQuestions()),
        getAllUserAvatar: ()=>dispatch(AllUserActions.getAllUserAvatar()),
    }
}

function mapStateToProps(state){
    return({
        currentUser: state.UserReducer.currentUser,
        allQuestions: state.QuestionsReducer.questions,
        usersAvatar: state.AllUserReducer.usersAvatar,
        
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);