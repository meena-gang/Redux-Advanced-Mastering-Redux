import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Card, CardBody,Heading,Flex, Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Result = () => {
    // const[flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const answers = useSelector(state => state.answers);
    // console.log(answers,'ans')
    const{data} = useSelector(state => state.fetch);

    const rightAnswers = data.map((item,i) => item.options[item.correctOptionIndex]);
    // console.log(rightAnswers,'rans');
    let score = 0;
    for(let i=0; i<answers.length; i++){
        if(answers[i] === rightAnswers[i]){
          score++;
        }
    }

  return (
    <div>
        <Flex alignItems='center' justifyContent="center" minHeight='100vh' direction='column'>
            <Card>
            <CardBody>
                <Heading size='md'>Your Score is {score}/10</Heading>
            </CardBody>
            </Card><br/>
            <Button  onClick={() => navigate('/quiz')} colorScheme='blue'>Start Again</Button>
        </Flex>
    </div>
  )
}

export default Result