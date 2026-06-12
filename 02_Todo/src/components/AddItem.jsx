import React, { useEffect, useState } from 'react'

const AddItem = ({ fetchNewItem3, updateChild,setUpdateChild }) => {
    const [text, setText] = useState("")
   
    const handleAdd = () => {

        fetchNewItem3(text,null)

        setText("")
    }
    useEffect(() => {
        // console.log(Object.keys(updateChild).length)
        if (Object.keys(updateChild).length!==0){
            
            setText(()=>updateChild.text)
           
        }
        }, [updateChild])

    const handleUpdate = () => {
         console.log(text,updateChild.id)
        //  updating
            fetchNewItem3(text,updateChild.id)
            // Swicth back to default
            setText("")
            setUpdateChild({})
     }

    return (
        <div className='flex justify-between  rounded-2xl p-2 w-3/5'>
            <input className='border rounded-xl p-0.5 px-2 w-full mr-2' type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Todo' ></input>
          
            {Object.keys(updateChild).length!=0 ?
                <div onClick={handleUpdate} className='border rounded-lg px-1 mx-1 py-0.5 bg-green-900 cursor-pointer hover:text-white'>Update</div>

                : <div onClick={handleAdd} className='border rounded-lg px-1 py-0.5 bg-green-900 cursor-pointer hover:text-white'>Add</div>
            }

        </div>
    )
}

export default AddItem