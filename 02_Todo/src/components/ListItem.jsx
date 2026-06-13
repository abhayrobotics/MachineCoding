import React, { useState } from 'react'

const ListItem = ({ item, handleDelete, handleUpdateMain ,handleChecked}) => {

    const [status,setStatus] =useState(false)
   
    const handleUpdate = (id) => {
        handleUpdateMain(id)
    }

    const handleChange =()=>{
        handleChecked(item.id)
    }


    
    // css
    const priorityClass = {
        "High": "text-amber-600 bg-amber-100",
        "Normal":"text-blue-900 bg-blue-100",
        "Low": "text-green-900 bg-green-100"
    }

    return (
        <div className='flex  justify-between items-center hover:border bg-(--code-bg)  rounded-lg p-2 my-2  '>
            <input className='w-3 text-right mr-3' type='checkbox' checked={item.status} onChange={handleChange}  ></input>
            <div className='flex  flex-col  w-full  '>
                <div className='flex text-lg'>

                    <div>{item.todo}</div>
                </div>
                <div className='flex i'>
                    <div className='text-xs p-0.5 px-1 text-blue-900 font-semibold bg-blue-100 rounded-sm  '>{item.date}</div>
                    <div className={`text-xs p-0.5  rounded-sm px-1 mx-2 font-semibold ${priorityClass[item.priority]}`}>{item.priority}</div>
                </div>
            </div>
            <div className='flex '>

                <div className='cursor-pointer hover:border p-0.5 w-7 rounded-lg' onClick={() => handleUpdate(item.id)} >✏️</div>
                <div className="cursor-pointer hover:border p-0.5 w-7 rounded-lg" onClick={() => handleDelete(item.id)}>❌</div>
            </div>

        </div>
    )
}

export default ListItem