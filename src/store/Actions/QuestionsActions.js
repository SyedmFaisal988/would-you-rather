class AllQuestionActions{
    static GET_QUESTIONS = "GET_QUESTIONS";
    static CURRENT_GET = "CURRENT_GET";
    static CURRENT_SET = "CURRENT_SET";
    static ADD_ANSWER =  "ADD_ANSWER";
    static getQuestions(){
        return {
            type: this.GET_QUESTIONS,
        }
    }
    static getCurrent(){
        return{
            type: this.CURRENT_GET,
        }
    }
    static setCurrent(data){
        return{
            type: this.CURRENT_SET,
            data,
        }
    }
    static addAnswer(data){
        return{
            type: this.ADD_ANSWER,
            data,
        }
    }
}

export default AllQuestionActions;