import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducer } from './Reducers/';


const middleware = [thunk];

if (__DEV__) {
  middleware.push(reduxLogger);
}

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store };
