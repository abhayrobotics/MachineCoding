import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ todos ,setTodos}) => {
    // console.log("check",todos)

    const handleUpdate = () => {

    }
    const handleDelete = (x) => {
        const filtered = todos.filter((item)=> item.id!=x)
        setTodos(filtered)

    }
    
    return (
        <>
            <div className='border border-amber-400'>
                <div className=' text-2xl italic '> Work to do : </div>
                {todos?.map((item,index) => <ListItem key={item.id} item={item} index= {index} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                )}
                {todos.length==0 && <h1>Todo is empty</h1>}
            </div>
        </>
    )
}

export default TodoList