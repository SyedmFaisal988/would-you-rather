class AllUserActions{
    static GET_ALL_USER = "GET_ALL_USER";
    static GET_ALL_USER_AVATAR = 'USERS_AVATAR';
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
}

export default AllUserActions;