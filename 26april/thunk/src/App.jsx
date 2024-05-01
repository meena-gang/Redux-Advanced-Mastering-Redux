import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchResponse } from './Action'
import { Grid, GridItem, Box} from '@chakra-ui/react'
import {useSearchParams} from 'react-router-dom';


function App() {
  const {data,isLoading,isError} = useSelector(state => state);
  const[searchParams, setSearchParams] = useSearchParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    const priceRange = searchParams.get('order');
    const val = searchParams.get('sort');
    const sortParam = priceRange ? `sort=${val}&order=${priceRange}`: "";
    console.log(sortParam,'sortparam');
    dispatch(fetchResponse(sortParam));
  },[dispatch,searchParams]);
  
  const changeOrderHandler = (e) => {
    console.log(e);
    if(e.target.value==""){
      setSearchParams(prev => ({
        ...prev,
        sort:"",
        order:""
      }))
    }else{
      setSearchParams(prev => (
         {
            ...prev,
            sort:'price',
            order:e.target.value
         }))
        } 
  }
  return (
    <>
      {isLoading ? <p>Loading...</p> : isError ? <p>Something Went Wrong</p> : data.length > 0 ? <Grid 
                                                                                                  templateColumns='repeat(3, 1fr)'
                                                                                                  templateRows='repeat(7, 1fr)'
                                                                                                  gap={10}>
                    <GridItem>
                      <select name="priceRange" onChange={changeOrderHandler} style={{width: '55%', height: '5%'}}>
                        <option value="">Sort by</option>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to low</option>
                      </select>
                    </GridItem>
                    { data.map((item, i) => (
                      <GridItem key={item.id}>
                        <Box overflow='hidden' width='400px' height='400px'>
                          <img src={item.image} alt={item.title} width='100%' height='100%' />
                        </Box>
                          <h2>{item.title}</h2>
                          <p>{item.price}</p>
                      </GridItem>
                   
                            ))} </Grid> : ""}
                        
    </>
  )
}

export default App
