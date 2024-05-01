import { fetchData,successData,errorData,selectedAnswer} from "./ActionTypes";
import {combineReducers} from 'redux'

const fetchReducer = (state={data:[],isLoading:false,isError:false},action)=> {
        switch(action.type){
        case fetchData : return {...state, isLoading:true, isError:false};
        case successData:  return {data:action.payload, isLoading:false, isError:false};
        case errorData : return {...state, isLoading:false, isError:true};
        default : return state;
    }
}
const answerReducer = (state=[],action) => {
    switch(action.type){
        case selectedAnswer : return [...state,action.payload];
        default : return state;
    }
}
const rootReducer = combineReducers({fetch:fetchReducer,answers:answerReducer})

export {rootReducer};