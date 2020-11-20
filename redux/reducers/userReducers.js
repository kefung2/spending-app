const INITIAL_STATE = {
  balence: '1000',
  income: '1500',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
      case 'USER_SET_BALENCE':
          return {
              ...state,
              username: action.username,
          };
      case 'USER_SET_INCOME':
          return {
              ...state,
              password: action.password,
          };
  };
}

export default userReducer;