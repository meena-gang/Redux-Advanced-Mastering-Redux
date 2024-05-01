import React from 'react'
import { authContext } from '../context/AuthContext';
import { useContext,useState} from 'react';
import axios from 'axios';
import { Heading,Flex,Input,Button} from '@chakra-ui/react';

const Login = () => {
    const {auth,setAuth} = useContext(authContext);
    const[form, setForm] = useState({
        email:"",
        password:""
    })
    const handleInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let storeData = async() => {
            let res = await axios.post('https://reqres.in/api/login',form);
            console.log(res);
            if(res.data.token==="QpwL5tke4Pnpja7X4"){
                setAuth(true);
            }
            }
        storeData();
        setForm({email:"",password:""})
    }
  return (
    <div>
        <Heading size='lg' pt='10' color='blue'>QUIZ APP</Heading>
        <Heading size="md" p='8'  pt='90'>Login Here</Heading>
        <form onSubmit={submitHandler}>
            <Input name='email' size='md' placeholder="Enter email Id" mb='4' width='300px' value={form.email} onChange={handleInput}/><br/>
            <Input name='password' size='md' placeholder="Enter password" mb='4'  width='300px' value={form.password} onChange={handleInput}/><br/>
            <Button type='submit' size='md' colorScheme='blue'>Submit</Button>
        </form>
     
       
    </div>
  )
}

export default Login