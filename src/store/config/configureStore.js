import thunk from 'redux-thunk'
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

export default (history) => {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history)))
  )

  return store
}
