import AllUserActions from '../Actions/AllUserActions';
function AllUserReducer(state={
    users:[
        {
          id: 'sarahedo',
          username: 'Sarah Edo',
          password: '123',
          avatarURL: 'https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png',
          answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
          },
          questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        {
          id: 'tylermcginnis',
          username: 'Tyler McGinnis',
          password:'12k4',
          avatarURL: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
          answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
          },
          questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
        {
          id: 'johndoe',
          username: 'John Doe',
          password: '23k4',
          avatarURL: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
          answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
          },
          questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        }
    ],
}, action){
    console.log(action)
    switch(action.type){
        case AllUserActions.GET_ALL_USER:
        console.log('ye tu chala')
        return state;
        case AllUserActions.GET_ALL_USER_AVATAR:
        var usersAvatar = {};
        for(var user of state.users){
          usersAvatar={
            ...usersAvatar,
            [user.id]: user.avatarURL, 
          }
        }
        console.log('all user avatar ', usersAvatar)
        return{
          ...state,
          usersAvatar,
        }
        default:
        return state;
    }
}

export default AllUserReducer;