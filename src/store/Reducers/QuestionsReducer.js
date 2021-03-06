import QuestionsAction from '../Actions/QuestionsActions';
function QuestionsReducer(state={
    currentQuestion:{},  
    questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: '8xf0y6ziyjabvozdd253nd',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
          }
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: '6ni6ok3ym7mf1p33lnez',
          author: 'johndoe',
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: 'become a superhero',
          },
          optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
          }
        },
        "am8ehyc8byjqgar0jgpub9": {
          id: 'am8ehyc8byjqgar0jgpub9',
          author: 'sarahedo',
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: 'be telekinetic',
          },
          optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
          }
        },
        "loxhs1bqm25b708cmbf3g": {
          id: 'loxhs1bqm25b708cmbf3g',
          author: 'tylermcginnis',
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: 'be a front-end developer',
          },
          optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
          }
        },
        "vthrdm985a262al8qx3do": {
          id: 'vthrdm985a262al8qx3do',
          author: 'tylermcginnis',
          timestamp: 1489579767190,
          optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
          },
          optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
          }
        },
        "xj352vofupe1dqz9emx13r": {
          id: 'xj352vofupe1dqz9emx13r',
          author: 'johndoe',
          timestamp: 1493579767190,
          optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
          },
          optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
          }
        },
    }
}, action){
    switch(action.type){
        case QuestionsAction.GET_QUESTIONS:
        return state;
        case QuestionsAction.CURRENT_GET:
        return {
          currentQuestion: state.currentQuestion,
        }
        case QuestionsAction.CURRENT_SET:
        return{
          ...state,
          currentQuestion: action.data,
        }
        case QuestionsAction.ADD_ANSWER:
          console.log('reducer ',state.questions[action.data.id][action.data.option]);
          state.questions[action.data.id][action.data.option].votes.push(action.data.author);
        return state;
        case QuestionsAction.ADD_QUESTION:
          const UID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          const format = {
            id: UID,
            timestamp: Date.now(),
            author: action.data.author,
            optionOne: {
              votes: [],
              text: action.data.would,
            },
            optionTwo: {
              votes: [],
              text: action.data.rather,
            }
          }
          const temp = state.questions;
          state.questions = {
            ...temp,
            [UID]: format,
          }
          state.currentQuestion = { [UID]: format,}
          console.log('reducer ', state);
        return state;
        default:
        return state;
    }
}

export default QuestionsReducer;