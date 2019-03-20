import {combineReducers} from 'redux';
import AllUserReducer from './AllUserReducer';
import UserReducer from './UserReducer';
import QuestionsReducer from './QuestionsReducer';

const rootReducer = combineReducers({
    AllUserReducer,
    UserReducer,
    QuestionsReducer,
})

export default rootReducer;