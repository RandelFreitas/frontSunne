import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { messageReducer } from './message';

const mainReducer = combineReducers({
  message: messageReducer
});

export const store = applyMiddleware(thunk)(createStore)(mainReducer);