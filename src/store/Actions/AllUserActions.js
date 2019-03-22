class AllUserActions{
    static GET_ALL_USER = "GET_ALL_USER";
    static GET_ALL_USER_AVATAR = 'USERS_AVATAR';
    static ADD_USER_ANSWER = "ADD_USER_ANSWER";
    static ADD_QUESTION_USER = "ADD_QUESTION_USER";
    static getAllUser(){
        return{
            type: this.GET_ALL_USER,
        }
    }
    static addQuestionUser(data){
        return{
            type: this.ADD_QUESTION_USER,
            data,
        }
    }
    static getAllUserAvatar(){
        return{
            type: this.GET_ALL_USER_AVATAR,
        }
    }
    static addAnswer(data){
        return{
            type: this.ADD_USER_ANSWER,
            data,
        }
    }
}

export default AllUserActions;