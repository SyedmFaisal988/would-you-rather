import UserActions from '../Actions/UserActions';
function UserReducer(state={
        currentUser: null,
        errors:{
            hasError: false,
            errorObj: {},
            serverError: null,
        },
        userName: "",
        passWord: "",
    }, 
    action){
        switch(action.type){
            case UserActions.GET_USER:
            return state;
            case UserActions.SET_USER:
            return {
                currentUser: action.data,
            };
            default: 
            return state;
        }
}
export default UserReducer;