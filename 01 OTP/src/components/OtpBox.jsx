import { useEffect, useRef, useState } from "react";

const OtpBox = ({ length }) => {
  const [secret, setSecret] = useState(new Array(length).fill(""));
  const [focusId, setFocusId] = useState(0);

  const inputRefs = useRef([])
  // manual otp check
  const password = 12345;

  // add the focus based on focus id, default is 0
  // useEffect(() => {
  //   if (focusId < length) {
  //     const element1 = document.getElementById("tab" + focusId);
  //     element1.focus();
  //   } else {
  //     password == secret.join("")
  //       ? console.log("Login successful")
  //       : console.log("Login unsuccessful");
  //   }
  // }, [focusId]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);



  // adding the otp no. in blank field
  const handleChange = (e, id) => {
    try {
      let updatedArray = [...secret];
      updatedArray[id] = e;
      console.log(secret, updatedArray, updatedArray[id],id);
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

    if(id>=0){
      console.log("delete triggered",id,  inputRefs.current[id].value)
      const updatedArray = [...secret]
      updatedArray[id]=""
      setSecret(updatedArray)
      
      
      inputRefs.current[id-1].focus()
    }
  };
  
  return (
    <div>
      <div className=" flex">
        {/* {secret} */}
        {secret.map((item, id) => {
          return (
            <input
              type="text"
              key={id}
              ref={(element) => {
                inputRefs.current[id] = element;
              }}
              onKeyDown={(e) => {
                if (e.key == "Backspace") {handleDelete(id)};
              }}
              className=" border border-amber-800 p-3 m-2 text-center rounded-lg w-10 h-10"
              maxLength={1}
              value={secret[id]}
              onChange={(e) => handleChange(e.currentTarget.value, id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpBox;
