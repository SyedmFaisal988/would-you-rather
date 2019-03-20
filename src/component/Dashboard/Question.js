import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsAction from '../../store/Actions/QuestionsActions';
import { Link } from 'react-router-dom';
import './Question.css';

class Question extends Component {
    state = {  }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('hello')
        return nextProps;
    }
    render() { 
        const data = this.props;
        console.log('props ', this.props);
        return (
            <div className="quest">
                <div className="question-header grey lighten-3">{data.name} ask</div>
                <div className="question-body">
                    <div style={{backgroundImage: 'url("'+ data.avatarURL+'")'}} className="author-pic">
                    </div>
                    <div className="question">
                    <strong>Would you Rather</strong>
                    <br/>
                    <br/>
                    <Link to="/details" onClick={()=>this.props.setCurrent(this.props.quest)} className="poll waves-effect waves-light btn">View Poll</Link>
                    </div>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return{
        setCurrent: (quest)=>dispatch(QuestionsAction.setCurrent(quest)),
    }
}

function mapStateToProps(state){
    return({
        current: state.QuestionReducer
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);