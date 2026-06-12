import React, { useEffect, useState } from 'react'

const AddItem = ({ fetchNewItem3, updateChild,setUpdateChild }) => {
    const [text, setText] = useState("")
   
    // seting the min date allowed
    const minDate =()=>{

        return "2026-06-12"
    }

    // handles the add functionality
    const handleAdd = () => {
        if(text!==""){

            fetchNewItem3(text,null,date)
            
            setText("")
        }
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
            // Switch back to default
            setText("")
            setUpdateChild({})
     }

    return (
        <div className='flex justify-between  rounded-2xl p-2 w-full'>
            <input className='border rounded-xl p-0.5 px-2 w-full mr-2' type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Todo' ></input>
            <input type='date' min="2026-06-12" value="2026-06-12" className='w-23 text-xs'></input>
           <select className='bg-[#0F172A] text-xs'>
            <option className='text-xs text-blue-300' >Normal</option>
            <option className='text-xs text-amber-300'>High</option>
            <option className='text-xs text-green-300' >Low</option>
           </select>

          
            {Object.keys(updateChild).length!=0 ?
                <div onClick={handleUpdate} className='border rounded-lg px-1 mx-1 py-0.5 bg-blue-800 cursor-pointer hover:text-white'>Update</div>

                : <div onClick={handleAdd} className='border rounded-lg px-1 py-0.5 bg-blue-800 text-white cursor-pointer hover:text-white'>Add</div>
            }

        </div>
    )
}

export default AddItem