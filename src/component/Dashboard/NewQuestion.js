import React, { Component } from 'react';
import './NewQuestion.css';
import QuestionsActions from '../../store/Actions/QuestionsActions';
import UserActions from '../../store/Actions/UserActions';
import { connect} from 'react-redux';
import AllUserActions from '../../store/Actions/AllUserActions';

class NewQuestion extends Component {
    state = {
        would: "",
        rather: "",
    }
    changeHandler = (ev)=>{
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    onSubmitHandler = ()=>{
        this.props.addQuestion({
            would: this.state.would,
            rather: this.state.rather,
            author: this.props.currentUser[0].id,
        })
        const temp = Object.keys(this.props.addedQuest.currentQuestion)
        this.props.addQuestionUser({
            id: this.props.currentUser[0].id,
            quest: temp[0],
        })
        this.props.history.push('/');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('new ',nextProps)
        return nextProps
    }
    render() { 
        return ( 
            <div className="new-container"> 
                <div className="new-wrapper z-depth-4">
                    <div className="new-header">
                        <h3>Create New Question</h3>
                    </div>
                    <div className="new-body">
                        <span className="new-align">Complete this question:</span>
                        <h3 className="new-align">Would you rather...</h3>
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={this.changeHandler} value={this.state.would} id="first_name2" type="text" placeholder="Enter option One" className="validate" name="would" />
                                <label className="active" htmlFor="first_name2">Would</label>
                            </div>
                        </div>
                        <h5 className="new-align">OR</h5>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={this.state.rather} onChange={this.changeHandler} id="first_name2" type="text" placeholder="Enter option Two" className="validate" name="rather" />
                                <label className="active" htmlFor="first_name2">Rather</label>
                            </div>
                        </div>
                        <button onClick={this.onSubmitHandler} class="new-btn btn waves-effect waves-light right" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        getUser: ()=>dispatch(UserActions.getUser()),
        addQuestion: (data)=>dispatch(QuestionsActions.addQuestion(data)),
        addQuestionUser: (data)=>dispatch(AllUserActions.addQuestionUser(data)),
    }
}

function mapStateToProps(state){
    return({
        currentUser: state.UserReducer.currentUser,
        addedQuest: state.QuestionsReducer,
    })
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);