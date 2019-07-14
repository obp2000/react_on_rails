import {createAction, createReducer} from 'redux-act'

export const toggleModal = createAction()
export const closeModal = createAction()

const navBar = createReducer({
    [toggleModal]: (state) => ({
      ...state,
      modal: !state.modal
    }),
    [closeModal]: (state) => ({
      ...state,
      modal: false
    }),    
  }, {
    modal: false
  });
  
  export default navBar