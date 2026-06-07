import Header from "./Header"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

const Todo = () => {
    const [todos,setTodos] =useState([])


    useEffect(()=>{
        fetchData()

    },[])

    // fetch data from Api just at Start
    const fetchData = async ()=>{
        const data = await fetch("https://dummyjson.com/todos")
        const json = await data.json()
        // console.log(json.todos)
        const smallList = json.todos.slice(0,10)
        setTodos(smallList)
    }

    // add new item in our main todos state
    const fetchNewItem =(data)=>{
        setTodos((prev)=>[...prev,{id:prev.length +1,todo:data}])
    } 


    return (
        <>
        <div className="flex justify-center">

            <div className='flex justify-center  flex-col  w-1/2 max-w-210 border '>
                <div className='text-3xl text-amber-700 text-center italic p-2 '> Flow </div>
                <Header fetchNewItem2 ={fetchNewItem} />
                <TodoList  todos={todos} setTodos={setTodos}/>

            </div>
        </div>
        </>
    )
}

export default Todo