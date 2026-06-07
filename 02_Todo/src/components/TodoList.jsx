import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ todos }) => {
    // console.log("check",todos)
    return (
        <>
            <div>
                <div> Work to do</div>
                {todos?.map((item) => <ListItem  key={item.id} item={item}/>
                )}

            </div>
        </>
    )
}

export default TodoList