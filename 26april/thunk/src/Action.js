const fetchData = "FETCH";
const successData = "SUCCESS";
const errorData = "ERROR";




const fetchRequest = () => {
    return {
        type:fetchData
    }
}

const successRequest = (data) => {
    return {
        type:successData,
        payload:data
    }
}
const errorRequest = () => {
    return {
        type:errorData
    }
}

const fetchResponse = (sortParam) => {
    return async (dispatch) => {
        try{
            dispatch(fetchRequest());
            const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?${sortParam}`);
            const data = await res.json();
            console.log(data.data,'action');
            dispatch(successRequest(data.data));
        }
        catch(err){
            console.log(err);
            dispatch(errorRequest());
        }
    }
}
export {fetchData,successData,errorData,fetchRequest,successRequest,errorRequest,fetchResponse};