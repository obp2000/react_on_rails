import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import persistState from 'redux-localstorage'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../redux/index'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState, history) {
  const store = createStore(
    connectRouter(history)(rootReducer), 
    preloadedState, 
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware, loggerMiddleware), 
    persistState('auth', {key: 'AUTH'})))

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./redux/index', () => {
        store.replaceReducer(connectRouter(history)(rootReducer));
      })
    }
    return store
}
