import React, { useState } from 'react'

const AddItem = ({fetchNewItem3}) => {
    const [text,setText] =useState("")
        const handleAdd = () => {
            fetchNewItem3(text)
    }


    return (
        <div className='flex justify-between  rounded-2xl p-2 w-3/5'>
            <input className='border rounded-xl p-0.5 px-2 w-full mr-2' type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Todo' ></input>
            <div onClick={handleAdd} className='border rounded-xl px-1 py-0.5 bg-green-900 cursor-pointer hover:text-white'>AddItem</div>
        </div>
    )
}

export default AddItem