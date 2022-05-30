import React,{useState,useEffect} from "react";
import axios from "axios";
import { Flex, Grid } from '@chakra-ui/react'
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodo=async()=>{
          let res=await axios.get(`http://localhost:8080/products`)
          setTodos(res.json);
          console.log(res.data)
        }
        getTodo()
    },[])
  return (
    <Flex>
      
      <Grid>
        
      </Grid>
      
    </Flex>
  );
};

export default Products;
