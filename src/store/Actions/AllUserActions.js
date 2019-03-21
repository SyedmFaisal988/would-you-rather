class AllUserActions{
    static GET_ALL_USER = "GET_ALL_USER";
    static GET_ALL_USER_AVATAR = 'USERS_AVATAR';
    static ADD_ANSWER = "ADD_ANSWER";
    static getAllUser(){
        return{
            type: this.GET_ALL_USER,
        }
    }
    static getAllUserAvatar(){
        return{
            type: this.GET_ALL_USER_AVATAR,
        }
    }
    static addAnswer(data){
        return{
            type: this.ADD_ANSWER,
            data,
        }
    }
}

export default AllUserActions;