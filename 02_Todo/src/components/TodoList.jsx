import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ todos ,setTodos,handleUpdateMain, handleDelete}) => {
    // console.log("check",todos)

    
    
    
    return (
        <>
            <div className=''>
                <div className=' text-2xl italic '> Work to do : </div>
                {todos?.map((item,index) => <ListItem key={item.id} item={item} index= {index} handleDelete={handleDelete} handleUpdateMain={handleUpdateMain}  />
                )}
                {todos?.length==0 && <h1>Todo is empty</h1>}
            </div>
        </>
    )
}

export default TodoList