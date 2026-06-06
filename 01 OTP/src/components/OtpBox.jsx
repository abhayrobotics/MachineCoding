import { useEffect, useRef, useState } from "react";

const OtpBox = ({ length }) => {
  const [secret, setSecret] = useState(new Array(length).fill(""));


  const inputRefs = useRef([])
  // manual otp check
  const password = 12345;

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);



  // adding the otp no. in blank field
  const handleChange = (e, id) => {
    try {
      let updatedArray = [...secret];
      updatedArray[id] = e.substring(e.length - 1);
      console.log(secret, updatedArray, updatedArray[id], id);
      setSecret(updatedArray);
      // move focus forward
      if (e && id < length - 1) {
        inputRefs.current[id + 1].focus();
      }


    } catch (e) {
      console.log(e);
    }
  };

  //Handle delete the otp no.
  const handleDelete = (id) => {

    if (id > 0) {
      // deleting the current element in focus
      console.log("delete triggered", id, inputRefs.current[id].value)
      const updatedArray = [...secret]
      updatedArray[id] = ""
      setSecret(updatedArray)

      // changing focus to previous element 
      inputRefs.current[id - 1].focus()
    }
  };
  // moving cursor to the right hand side so that last string is updated
  const handleClick = (id) => {
    inputRefs.current[id].setSelectionRange(1, 1)

  }
  // validate OTP
  const handleSubmit = () => {
    if(password == secret.join("")){
      console.log("success")
    }
    else{
       console.log("wrong otp",sec)
    }
  }

  return (
    <div className="flex items-center flex-col">
      <div className=" flex items-center">

        {secret.map((item, id) => {
          return (

            <input
              type="text"
              key={id}
              ref={(element) => {
                inputRefs.current[id] = element;
              }}
              onKeyDown={(e) => {
                if (e.key == "Backspace") { handleDelete(id) };
              }}
              onChange={(e) => handleChange(e.currentTarget.value, id)}
              onClick={() => handleClick(id)}
              className=" border border-amber-800 p-3 m-2 text-center rounded-lg w-10 h-10"
              // maxLength={1}
              value={secret[id]}
            />

          
          );
        })}
          </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="my-3 w-28 text-center text-lg rounded-3xl hover:bg-amber-900   duration-100 border border-amber-800 cursor-pointer p-2"
        >
          Submit
        </button>
    </div>
  );
};

export default OtpBox;
