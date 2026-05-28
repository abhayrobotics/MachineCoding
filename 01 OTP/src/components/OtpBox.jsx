import { useState } from "react"

const OtpBox = ({ length }) => {
    const [secret, setSecret] = useState(new Array(5).fill(""))

    // const handleChange =()=>{
    //     let updatedArray = secret

    // }

    // pending handle change
    return (
        <div>
            <div className=" flex">
                {secret}
                {
                    secret.map((item, id) => {
                        return (

                            <input type="text" key={id} className=" border border-amber-800 p-3 m-2 rounded-lg w-10 h-10" maxLength={1} value={secret[id]} onChange={(e)=> setSecret()} />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtpBox