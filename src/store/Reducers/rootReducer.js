import {combineReducers} from 'redux';
import AllUserReducer from './AllUserReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    AllUserReducer,
    UserReducer,
})

export default rootReducer;