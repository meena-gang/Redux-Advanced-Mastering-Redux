import {legacy_createStore} from 'redux';
import {logger} from 'redux-logger';
import {thunk} from 'redux-thunk';
import { rootReducer} from './Reducers';
import { applyMiddleware } from 'redux';

const store = legacy_createStore(rootReducer, applyMiddleware(thunk,logger));

export {store};