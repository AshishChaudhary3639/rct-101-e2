import React, {useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

const App = () => {

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
    <div>
      <AddProduct/>
    </div>
  )

};

export default App;
