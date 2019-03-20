import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    state = {  }
    render() { 
        const data = this.props;
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
                    <a className="poll waves-effect waves-light btn">View Poll</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Question;