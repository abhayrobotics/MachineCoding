import React from 'react'

const ListItem = ({ item }) => {

    return (
        <div className='flex'>
            <div className='w-5 text-right mx-2'>{item.id}.</div>
               
           
            <div>{item.todo}</div>
            </div>
    )
}

export default ListItem