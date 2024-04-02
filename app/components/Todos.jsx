"use client"
import React from 'react'
import { useEffect , useState } from 'react'
const Todos = () => {
    const [todos, setTodos] = useState({})

    const FatchDataApi = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await response.json();
      setTodos(result)
    }


    useEffect( () => {
      FatchDataApi()
    },[])

    
    console.log(todos);
  return (
    <div>
        <h1>{todos.title}</h1>
    </div>
  )
}

export default Todos