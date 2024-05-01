import { fetchData,successData,errorData } from "./Action";

const fetchReducer = (state={data:[],isLoading:false,isError:false},action)=> {
        switch(action.type){
        case fetchData : return {...state, isLoading:true, isError:false};
        case successData:  return {data:action.payload, isLoading:false, isError:false};
        case errorData : return {...state, isLoading:false, isError:true};
        default : return state;
    }
}

export {fetchReducer};