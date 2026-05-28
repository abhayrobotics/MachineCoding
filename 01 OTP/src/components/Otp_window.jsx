import { useState } from "react";

const Otp_window = () => {

  const [mobile, setMobile] = useState("")
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    const isValidMobile = /^\d{10}$/.test(mobile);

    setSubmit(isValidMobile)
    console.log("handle submit activated", mobile, submit,isValidMobile)
  }

  return (

    <div className="flex h-dvh justify-center border border-amber-600">
      <div className="flex  justify-center items-center  flex-col  w-1/2  min-w-96   border">

        <h1 className="text-amber-600 text-3xl  m-5 ">Login</h1>

        {
          !submit &&

          <div className="m-5 flex flex-col items-center">

            <input type="text" placeholder="Mobile no." className="border rounded-lg p-2" maxLength={10} onChange={(e) => setMobile(e.currentTarget.value)} value={mobile} ></input>
            <button type="button" onClick={handleSubmit} className="my-3 w-28 text-center text-lg rounded-3xl hover:bg-amber-900   duration-100 border border-amber-800 cursor-pointer p-2">Submit</button>
          </div>
        }
      </div>
    </div>

  )
};

export default Otp_window;
