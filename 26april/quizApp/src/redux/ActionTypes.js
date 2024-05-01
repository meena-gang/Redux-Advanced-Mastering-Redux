const fetchData = "FETCH";
const successData = "SUCCESS";
const errorData = "ERROR";
const selectedAnswer = "Answer"

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
const answerRequest = (ans) => {
    return{
        type:selectedAnswer,
        payload:ans
    }
}
const fetchResponse = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchRequest());
            const res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
            const data = await res.json();
            // console.log(data,'action');
            dispatch(successRequest(data.data));
        }
        catch(err){
            console.log(err);
            dispatch(errorRequest());
        }
    }
}
export {fetchData,successData,errorData,fetchRequest,successRequest,errorRequest,fetchResponse,answerRequest,selectedAnswer};