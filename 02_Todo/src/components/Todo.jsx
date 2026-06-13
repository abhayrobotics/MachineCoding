import AddItem from "./AddItem"
import Header from "./Header"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [updateChild, setUpdateChild] = useState({})


    //  1st use effect for fetching data
    useEffect(() => {
        const data = localStorage.getItem("todos")
        if (!data || data === "undefined") {
            // console.log("1st UE"
            fetchData()
        }
        else {
            //    console.log("ue else")

            // const data = localStorage.getItem("todos")
            const newData = JSON.parse(data)
            setTodos(newData)
            // console.log("ue else",newData)
        }

    }, [])


    //  2nd for loading data in local storage, after every change in local storage
    useEffect(() => {
        if (todos.length > 0) {

            localStorage.setItem("todos", JSON.stringify(todos))
            // console.log(" 2 ue",JSON.stringify(todos))
        }
    }, [todos])

    // fetch data from Api just at Start
    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/todos")
        const json = await data.json()
        // console.log(json.todos)
        const smallList = json.todos.slice(0, 10)
        setTodos(smallList)
    }

    // add new item in our main todos state
    const fetchNewItem = (data, x, status, date, priority) => {
        if (x == null) {

            setTodos((prev) => [...prev, {
                id: prev.length + 1,
                todo: data,
                status: status,
                date: date,
                priority: priority
            }])
            console.log(todos)
        }
        else {
            // update data to flow on our main todos
            const updatedData = todos.map((item) => {
                if (item.id - 1 == x) {
                    item.todo = data;
                    item.date =date;
                    item.priority =priority;
                    item.status=status;
                }
                return item
            })
            // console.log(updatedData)
            setTodos(updatedData)
        }

        // since todos is updated, 2nd useEffect is also updated due to dependency on todos
    }

    // handle update
    const handleUpdateMain = (x) => {
        const ItemToUpdate = todos.find((item) => item.id == x)
        console.log(ItemToUpdate);
        setUpdateChild({ "id": x - 1,
             "todo": ItemToUpdate.todo,
             "date":ItemToUpdate.date,
             "priority":ItemToUpdate.priority,
             "status":ItemToUpdate.status
                 })
        // console.log(x-1,updateChildText[0].todo)
    }


    return (
        <>
            <div className="flex justify-center">

                <div className='flex justify-center  flex-col min-w-150 w-1/2 max-w-210 border '>

                    <div className='text-3xl text-amber-700 text-center italic p-2 '> Flow </div>

                    {/* HEader section */}
                    <div className="flex justify-between flex-col  border rounded-lg p-2 w-full">
                        <AddItem fetchNewItem={fetchNewItem} updateChild={updateChild} setUpdateChild={setUpdateChild} />
                        <div>Search</div>
                    </div>

                    <TodoList todos={todos} setTodos={setTodos} handleUpdateMain={handleUpdateMain} />
                    {/*  date={date} setDate={setDate} priority={priority} setPriority={setPriority} status */}
                </div>
            </div>
        </>
    )
}

export default Todo