import Header from "./Header"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

const Todo = () => {
    const [todos, setTodos] = useState([])

//  1st use effect for fetching data
    useEffect(() => {
        const data = localStorage.getItem("todos")
       if(!data || data==="undefined"){
        // console.log("1st UE")
           fetchData()
       }
       else{
           console.log("ue else")
        
        // const data = localStorage.getItem("todos")
        const newData =JSON.parse(data) 
        setTodos(newData)
        console.log("ue else",newData)
       }
    
    }, [])


//  2nd for loading data in local storage, after every change in local storage
    useEffect(()=>{
        if(todos.length>0){

            localStorage.setItem("todos", JSON.stringify(todos))
            console.log(" 2 ue",JSON.stringify(todos))
        }
    },[todos])

// fetch data from Api just at Start
const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/todos")
    const json = await data.json()
    // console.log(json.todos)
    const smallList = json.todos.slice(0, 10)
    setTodos(smallList)
}

// add new item in our main todos state
const fetchNewItem = (data) => {
    
    setTodos((prev) => [...prev, { id: prev.length + 1, todo: data }])
    console.log(todos)
    // since todos is updated, 2nd useEffect is also updated due to dependency on todos
}

//! local storage add tem not working
return (
    <>
        <div className="flex justify-center">

            <div className='flex justify-center  flex-col  w-1/2 max-w-210 border '>
                <div className='text-3xl text-amber-700 text-center italic p-2 '> Flow </div>
                <Header fetchNewItem2={fetchNewItem} />
                <TodoList todos={todos} setTodos={setTodos} />

            </div>
        </div>
    </>
)
}

export default Todo