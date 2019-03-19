import AllUserActions from '../Actions/AllUserActions';
function AllUserReducer(state={
    users:[
        {id:0, username:"admin", password:"admin"},
        {id:1, username: "faisal", password:"12345"},
    ],
}, action){
    switch(action.type){
        case AllUserActions.GET_ALL_USER:
        return state;
        default:
        return state;
    }
}

export default AllUserReducer;