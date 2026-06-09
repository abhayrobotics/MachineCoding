import React from 'react'

const ListItem = ({ item, index, handleDelete, handleUpdateMain }) => {

   const handleUpdate =(id)=>{
    
    handleUpdateMain(id)
   }

    return (
        <div className='flex  justify-between'>
            <div className='flex '>
                <div className='w-5 text-right mx-2'>{index + 1}.</div>
                <div>{item.todo}</div>
            </div>
            <div className='flex '>

                <div onClick={() => handleUpdate(item.id)} >✏️</div>
                <div className="cursor-pointer hover:border p-0.5 rounded-lg" onClick={() => handleDelete(item.id)}>❌</div>
            </div>
        </div>
    )
}

export default ListItem