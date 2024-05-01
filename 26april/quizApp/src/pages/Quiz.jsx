import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { fetchResponse ,answerRequest} from '../redux/ActionTypes';
import { useNavigate } from 'react-router-dom';
import { Radio,RadioGroup,Stack,Box, Heading,Button} from '@chakra-ui/react';

const Quiz = () => {
    const {data,isLoading,isError} = useSelector(state => state.fetch);
    const dispatch = useDispatch();
    const[questionIndex, setQuestionIndex] = useState(0);
    const[selectedOption, setSelectedOption] = useState(null);
    // const[answers, setAnswers] = useState([]);
    const btnText = questionIndex=='9' ? 'Submit' : 'Next';
    // const changeOptionHandler = (e) => {
    //     console.log(e);
    //     setSelectedOption(e.target.value)
    // }
    console.log(selectedOption);
    const navigate = useNavigate();
    const nextQuestioHandler = (e) => {
        e.preventDefault();
        if(!selectedOption){
            alert('Please select an option');
            return;
        }
        dispatch(answerRequest(selectedOption))
        if(questionIndex=='9'){
            navigate('/result');
        }else{
        setQuestionIndex(prev => prev+1);
        setSelectedOption(null);
       }
    }
    // console.log(answers);

    useEffect(() => {
        dispatch(fetchResponse());
      },[dispatch]);
  
    return (
    <div>
    {data.length>0 ? <>
                        
                        <Box textAlign='left'>
                        <Heading size='md' pb='10px' pt='60px'>Q.{questionIndex+1}  {data[questionIndex].question}</Heading>
                        
                        {/* <input type='radio' name='option' value={data[questionIndex].options[0]} onChange={changeOptionHandler} checked={selectedOption === data[questionIndex].options[0]}/>
                        <label>{data[questionIndex].options[0]}</label><br/>
                        <input type='radio'  name='option' value={data[questionIndex].options[1]} onChange={changeOptionHandler} checked={selectedOption === data[questionIndex].options[1]}/>
                        <label>{data[questionIndex].options[1]}</label><br/>
                        <input type='radio'  name='option' value={data[questionIndex].options[2]} onChange={changeOptionHandler} checked={selectedOption === data[questionIndex].options[2]}/>
                        <label>{data[questionIndex].options[2]}</label><br/>
                        <input type='radio'  name='option' value={data[questionIndex].options[3]} onChange={changeOptionHandler} checked={selectedOption === data[questionIndex].options[3]}/>
                        <label>{data[questionIndex].options[3]}</label><br/> */}
                        <form onSubmit={nextQuestioHandler}>
                        <RadioGroup onChange={setSelectedOption} value={selectedOption} key={questionIndex+1}>
                        <Stack direction='column'>
                            <Radio  value={data[questionIndex].options[0]}>{data[questionIndex].options[0]}</Radio>
                            <Radio  value={data[questionIndex].options[1]}>{data[questionIndex].options[1]}</Radio>
                            <Radio  value={data[questionIndex].options[2]}>{data[questionIndex].options[2]}</Radio>
                            <Radio  value={data[questionIndex].options[3]}>{data[questionIndex].options[3]}</Radio>
                        </Stack>
                        </RadioGroup>
                        <br/>
                        <Box>
                        <Button type='submit' p='5' pl='7' pr='7' variant='outline' colorScheme='blue'>{btnText}</Button>
                        </Box>
                       </form>
                        </Box>
                        
                        <br/>
                        
                    </> : ""}
    
    </div>
  )
}

export default Quiz