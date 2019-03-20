class AllQuestionActions{
    static GET_QUESTIONS = "GET_QUESTIONS";
    static getQuestions(){
        return {
            type: this.GET_QUESTIONS,
        }
    }
}

export default AllQuestionActions;