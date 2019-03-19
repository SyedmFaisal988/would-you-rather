class UserActions{
    static GET_USER = 'GET_USER';
    static SET_USER = 'SET_USER'; 
    static VERIFY_USER = 'VERIFY_USER';

    static getUser(){
        return {
            type: this.GET_USER,
        }
    }
    static setUser(data){
        return {
            type: this.SET_USER,
            data,
        }
    }
}

export default UserActions;