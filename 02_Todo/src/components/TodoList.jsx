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
                <div> Work to do</div>
                {todos?.map((item,index) => <ListItem key={item.id} item={item} index= {index} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                )}

            </div>
        </>
    )
}

export default TodoList