import {legacy_createStore} from 'redux';
import {logger} from 'redux-logger';
import {thunk} from 'redux-thunk';
import { fetchReducer } from './Reducer';
import { applyMiddleware } from 'redux';

const store = legacy_createStore(fetchReducer, applyMiddleware(thunk,logger));

export {store};