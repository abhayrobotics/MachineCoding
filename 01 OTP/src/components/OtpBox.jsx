import { useEffect, useState } from "react"

const OtpBox = ({ length }) => {
    const [secret, setSecret] = useState(new Array(5).fill(""))
    const [focusId,setFocusId] = useState(0);
    // manual otp check
    const password=12345

    // add the focus based on focus id, default is 0
    useEffect(()=>{
        if(focusId<length){

            const element1 = document.getElementById("tab"+focusId)
            element1.focus()
        }
        else{
            password==secret.join("")?
            console.log("Login successful"):
            console.log("Login unsuccessful")
        }
    },[focusId])

    const handleChange =(e,id)=>{
        try{

            let updatedArray = [...secret]
            updatedArray[id]= e.currentTarget.value
            console.log(secret,updatedArray,secret[id])
            setSecret(updatedArray)
            setFocusId((prev)=>prev+1)
        }
        catch(e){
            console.log(e)
        }

    }

    // pending handle change
    return (
        <div>
            <div className=" flex">
                {/* {secret} */}
                {
                    secret.map((item, id) => {
                        return (

                            <input type="text" key={id}  id={"tab"+id}  className=" border border-amber-800 p-3 m-2 text-center rounded-lg w-10 h-10" maxLength={1} value={secret[id]} onChange={(e)=>handleChange(e,id)} />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtpBox