import axios from 'axios'
import fetch from 'cross-fetch'
import {SubmissionError} from 'redux-form'

// Actions
const REQUEST = 'react-devise/auth/REQUEST'
const RECEIVED = 'react-devise/auth/RECEIVED'
const FAILED = 'react-devise/auth/FAILED'
const SIGNOUT = 'react-devise/auth/SIGNOUT'

const REQUEST_REGISTER = 'REQUEST_REGISTER'
const RECEIVED_REGISTER = 'RECEIVED_REGISTER'
const FAILED_REGISTER = 'FAILED_REGISTER'

// Action Creators
export function authenticate({email, password}) {
  return (dispatch, getState) => {
    dispatch(startAuthentication())
    return axios({
      url: '/auth/sign_in',
      method: 'POST',
      data: { email, password }
    }).then(response => {
      // console.log('response: ', response.data)
      const uid = response.headers['uid']
      const client = response.headers['client']
      const accessToken = response.headers['access-token']
      const expiry = response.headers['expiry']
      const email = response.data.data['email']
      const name = response.data.data['name']
      const nickname = response.data.data['nickname']
      dispatch(successAuthentication(uid, client, accessToken, expiry, email, name, nickname))
    }).catch(error => {
      const {response: {data: {errors}}} = error
      dispatch(failAuthentication(errors))
      throw new SubmissionError({_error: errors})
    })
  }
}

export function register({name, nickname, email, password, passwordConfirmation}) {
  return (dispatch, getState) => {
    dispatch(startRegister())
    const fb = new FormData()
    fb.append('name', name)
    fb.append('email', email)
    fb.append('nickname', nickname)
    fb.append('password', password)
    fb.append('password_confirmation', passwordConfirmation)
    return fetch('/auth', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
        body: fb
      })
      .then(res => res.json())
      .then(json => {
         if (json.status == 'error') {
          const {errors: {full_messages}} = json
          dispatch(failRegister(full_messages))
          throw new SubmissionError({_error: full_messages})
        } else {
          dispatch(successRegister())
        }
      })
      // .catch(error => {
      //   console.log('register error: ', error)
      //   // alert('ddddddddd')
      //   // const {response: {data: {errors}}} = error
      //   dispatch(failRegister(error))
      //   throw new SubmissionError({_error: error})
      // })
  }
}

export function signout() {
  return (dispatch, getState) => {
    const { auth: {accessToken, client, uid} } = getState()
    return axios({
      url: '/auth/sign_out',
      method: 'DELETE',
      headers: {
        'access-token': accessToken,
        'client': client,
        'uid': uid
      }
    }).then(response => {
      dispatch(doSignout())
    }).catch(error => {
      console.log(error)
    })
  }
}

export function expireAuthentication() {
  return doSignout()
}

function startAuthentication() {
  return { type: REQUEST }
}

function successAuthentication(uid, client, accessToken, expiry, email, name, nickname) {
  return { type: RECEIVED, uid, client, accessToken, expiry, email, name, nickname }
}

function failAuthentication(errors) {
  
  return { type: FAILED, errors }
}

function doSignout() {
  return { type: SIGNOUT }
}

function startRegister() {
  return { type: REQUEST_REGISTER }
}

function successRegister() {
  return { type: RECEIVED_REGISTER }
}

function failRegister(errors) {
  return { type: FAILED_REGISTER, errors }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST:
      return Object.assign(
        {},
        state,
        {
          loading: true
        }
      )
    case RECEIVED:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          isAuthenticated: true,
          uid: action.uid,
          client: action.client,
          accessToken: action.accessToken,
          expiry: action.expiry,
          email: action.email, 
          name: action.name,
          nickname: action.nickname,
          errors: null
        }
      )
    case FAILED:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          errors: action.errors
        }
      )
    case SIGNOUT:
      return Object.assign(
        {},
        initialState
      )
    case REQUEST_REGISTER:
      return Object.assign(
        {},
        state,
        {
          loading: true
        }
      )
    case RECEIVED_REGISTER:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          errors: null
          // isAuthenticated: true,
          // uid: action.uid,
          // client: action.client,
          // accessToken: action.accessToken,
          // expiry: action.expiry,
          // email: action.email, 
          // name: action.name,
          // nickname: action.nickname
        }
      )
    case FAILED_REGISTER:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          errors: action.errors
        }
      )
    default: return state
  }
}

const initialState = {
  loading: false,
  isAuthenticated: false,
  client: null,
  accessToken: null,
  uid: null,
  expiry: null,
  errors: null
}
