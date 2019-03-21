import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsAction from '../../store/Actions/QuestionsActions';
import { Link } from 'react-router-dom';
import './Question.css';
import M from 'materialize-css';

class Question extends Component {
    state = {

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps;
    }
    
    ModelEve = ()=>{
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {
            startingTop: '50%',
            endingTop: '30%'
        });
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', this.ModelEve());
    }
    render() {
        const data = this.props;
        // console.log('props ', this.props);
        return (
            <div className="quest">
                <div className="question-header grey lighten-2">{data.name} ask</div>
                <div className="question-body">
                    <div style={{backgroundImage: 'url("'+ data.avatarURL+'")'}} className="author-pic">
                    </div>
                    <div className="question">
                    <h3>Would you Rather</h3>
                    <p>{this.props.quest.optionOne.text}</p>
                    <p>{this.props.quest.optionTwo.text}</p>
                        {
                            this.props.status ? <Link  to={"/question/:" + this.props.quest.id} onClick={() => this.props.setCurrent(this.props.quest)} className="poll waves-effect waves-light btn right">View Poll</Link> :
                                <div >
                                    <a style={{width:'100%'}} className=" waves-effect waves-light btn modal-trigger" href={"#"+this.props.quest.id}>View Poll</a>
                                    <div id={this.props.quest.id} className="modal">
                                        <div className="modal-content">
                                            <h4>Already Answered</h4>
                                            <p>Look's like you already Answered this question,Click Agree to see Poll Result</p>
                                        </div>
                                        <div className="modal-footer">
                                            <a onClick={()=>{console.log('ye set hoa tha ',this.props.quest, this.props) ;this.props.setCurrent(this.props.quest);
                                                this.props.history.push('/result');}} href="#!" className="modal-close waves-effect waves-light btn">Agree</a>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <br></br>
                
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