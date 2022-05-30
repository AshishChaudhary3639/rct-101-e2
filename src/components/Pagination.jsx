import React,{useState,useEffect} from "react";
import axios from "axios";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)
  const [todos, setTodos] = useState([])

  useEffect(() => {
      const getTodo=async()=>{
        let res=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
        setTodos(res.json);
        console.log(res.data)
      }
      getTodo()
  },[])

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"></Button>
      <Button data-cy="pagination-previous-button"></Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3"></option>
        <option data-cy="pagination-limit-6"></option>
        <option data-cy="pagination-limit-9"></option>
      </Select>
      <Button data-cy="pagination-next-button"></Button>
      <Button data-cy="pagination-last-button"></Button>
    </ButtonGroup>
  );
};

export default Pagination;
