import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ todos }) => {
    // console.log("check",todos)
    return (
        <>
            <div className='border border-amber-400'>
                <div> Work to do</div>
                {todos?.map((item) => <ListItem  key={item.id} item={item}/>
                )}

            </div>
        </>
    )
}

export default TodoList