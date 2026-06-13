import React, { useEffect, useState } from 'react'

const AddItem = ({ fetchNewItem, updateChild, setUpdateChild }) => {
    
    // set update child 
    const [text, setText] = useState("")
    const [date, setDate] = useState(new Date().toISOString().split("T")[0])
    const [priority, setPriority] = useState("Normal")
    const [status, setStatus] = useState("Pending")

    // setting the min date allowed
    const minDate = () => {
        let today = new Date();
        // console.log(today.toISOString().split("T")[0])

        return today.toISOString().split("T")[0]
    }

    // handles the add functionality
    const handleAdd = () => {
        if (text !== "") {

            fetchNewItem(text, null, false, date, priority)

            // setting back to default
            setText("")
            setPriority("Normal")
            setDate(minDate())
        }
    }

    // runs if updateChild changes
    useEffect(() => {
        // console.log(Object.keys(updateChild).length)
        if (Object.keys(updateChild).length !== 0) {

            setText(() => updateChild.todo)
            setDate(()=>updateChild.date)
            setPriority(()=>updateChild.priority)
            setStatus(()=>updateChild.status)
        }
    }, [updateChild])

    const handleUpdate = () => {
        console.log(text, updateChild)
        
            //  updating
            fetchNewItem(text, updateChild.id, false, date, priority)
        // Switch back to default
        setText("")
        setUpdateChild({})
        setPriority("Normal")
        setDate(minDate())
    }


    return (
        <div className='flex justify-between    p-3 w-full bg-(--code-bg) rounded-lg'>
            <input className='border rounded-xl p-0.5 px-2 w-full mr-2' type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Todo' ></input>
            <input type='date' min={minDate()} value={date} onChange={(e) => setDate(e.target.value)} className='w-23 text-xs font-semibold'></input>
            <select className='bg-[#0F172A] text-xs font-semibold' value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option className='text-xs text-blue-300' >Normal</option>
                <option className='text-xs text-amber-300'>High</option>
                <option className='text-xs text-green-300' >Low</option>
            </select>


            {Object.keys(updateChild).length != 0 ?
                <div onClick={handleUpdate} className='border rounded-lg px-2 mx-1 py-0.5 bg-blue-800 cursor-pointer hover:text-white'>Update</div>

                : <div onClick={handleAdd} className='border rounded-md px-2 mx-1 py-0.5 bg-blue-800 text-white cursor-pointer hover:text-white'>Add</div>
            }

        </div>
    )
}

export default AddItem