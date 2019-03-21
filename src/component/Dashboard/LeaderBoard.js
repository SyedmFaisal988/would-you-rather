import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import UserActions from '../../store/Actions/UserActions'
import AllUserActions from '../../store/Actions/AllUserActions';

class LeaderBoard extends Component {
    state = { 
        leaderList: [],
     }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { allUsers} = nextProps;
        console.log(leaderList)
        var leaderList = [];
        for(var user of allUsers){
            let answerNum = 0;
            for(var key in user.answers){
                answerNum++;
            }
            leaderList.push({
                username: user.username,
                answered: answerNum,
                question: user.questions.length,
                score: answerNum+user.questions.length,
                id: user.id,
            })
        }
        console.log(leaderList)
        function compare(a,b) {
            if (a.score < b.score)
              return 1;
            if (a.score > b.score)
              return -1;
            return 0;
        }
        leaderList.sort(compare)
        console.log('sorted',leaderList)
        return {leaderList};
    }
    render() { 
        console.log('users', this.state.leaderList)
        let leaderList = [];
        for(var lead of this.state.leaderList){
            leaderList.push(lead);
        }
        console.log('state ',this.state.leaderList)
        console.log('leaderd',leaderList)
        return ( 
            <div className="lead-container">
                {
                    leaderList.map((leader)=>{return <ShowAllLeaders key={leader.id} leader={leader} usersAvatar={this.props.usersAvatar} />})
                }
            </div>
        );
    }
}

function ShowAllLeaders(props){
    return(
        <div className="lead-wrapper z-depth-4">
                <div className="lead-body">
                    <div style={{backgroundImage: 'url("' + props.usersAvatar[props.leader.id] + '")' }} className="lead-user-pic">
                    </div>
                    <div className="lead-name">
                        <h2>{props.usersAvatar[props.leader.id+"1"]}</h2>
                        <br/>
                        <span>Answered questions:</span><span style={{float: 'right'}}>{props.leader.answered}</span>
                        <br/>
                        <br/>
                        <span>Created questions:</span><span style={{float: 'right'}}>{props.leader.question}</span>
                    </div>
                    <div className="left lead-stats">
                        <div className="lead-score grey lighten-2">
                            <span>Score</span>
                        </div>
                        <br/>
                        <a class="btn-floating btn-large waves-effect waves-light "><strong style={{fontSize: '20px'}}>{props.leader.score}</strong></a>
                    </div>
                </div>
                </div>
    )
}
 
function mapDispatchToProps(dispatch){
    return{
        getAllUserAvatar: ()=>dispatch(AllUserActions.getAllUserAvatar()),
        getAllUser: ()=>dispatch(AllUserActions.getAllUser()),
        getQuestions: ()=>dispatch(QuestionsActions.getQuestions()),
    }
}

function mapStateToProps(state){
    return({
        usersAvatar: state.AllUserReducer.usersAvatar,
        allUsers: state.AllUserReducer.users,
        allQuestions: state.QuestionsReducer.questions
    })
}
 

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);