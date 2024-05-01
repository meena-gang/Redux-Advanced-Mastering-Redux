import {applyMiddleware, legacy_createStore} from 'redux';
import logger from "redux-logger";

const reducer = (state = 0, action) => {
   
    switch(action.type){
        case 'ADD' : return state = state+(+action.payload);
        case 'REDUCE' : return state = state-(+action.payload);
        default : return state;
    }
};

 const store = legacy_createStore(reducer, applyMiddleware(logger));

 export {store};