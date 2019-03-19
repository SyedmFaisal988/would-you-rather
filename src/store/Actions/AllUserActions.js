class AllUserActions{
    static GET_ALL_USER = "GET_ALL_USER";
    static getAllUser(){
        return{
            type: this.GET_ALL_USER,
        }
    }
}

export default AllUserActions;