import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ todos ,setTodos,handleUpdateMain, handleDelete}) => {
    // console.log("check",todos)
    const handleChecked =(id)=>{

        // const changedItem = todos.find((item)=>item.id=== id)

        setTodos(
            todos.map((item)=>{
                if(item.id===id){
                    return {...item,status:!item.status}
                }
                return item
            })
        )
    }
 
    
    
    return (
        <>
            <div className=''>
                <div className=' text-2xl italic  '> Work to do : </div>
                {todos?.map((item,index) => <ListItem key={item.id} item={item} index= {index} handleDelete={handleDelete} handleUpdateMain={handleUpdateMain} handleChecked={handleChecked} />
                )}
                {todos?.length==0 && <h1>Todo is empty</h1>}
            </div>
        </>
    )
}

export default TodoList