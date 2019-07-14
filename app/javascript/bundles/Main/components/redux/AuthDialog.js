import {createAction, createReducer} from 'redux-act'

export const toggleLogin = createAction()

const authDialog = createReducer({
    [toggleLogin]: (state) => ({
      ...state,
      login: !state.login
    }),
  }, {
    login: true
  });
  
  export default authDialog