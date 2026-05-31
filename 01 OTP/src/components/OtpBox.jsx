import { useEffect, useState } from "react";

const OtpBox = ({ length }) => {
  const [secret, setSecret] = useState(new Array(5).fill(""));
  const [focusId, setFocusId] = useState(0);
  // manual otp check
  const password = 12345;

  // add the focus based on focus id, default is 0
  useEffect(() => {
    if (focusId < length) {
      const element1 = document.getElementById("tab" + focusId);
      element1.focus();
    } else {
      password == secret.join("")
        ? console.log("Login successful")
        : console.log("Login unsuccessful");
    }
  }, [focusId]);

  // adding the otp no. in blank field
  const handleChange = (e, id) => {
    try {
      let updatedArray = [...secret];
      updatedArray[id] = e;
      console.log(secret, updatedArray, secret[id]);
      setSecret(updatedArray);
      setFocusId((prev) => prev + 1);
    } catch (e) {
      console.log(e);
    }
  };

  //Handle delete the otp no.
  const handleDelete = (id) => {

    // console.log("delete triggered",id,focusId)
    // handleChange("",id)
    // setFocusId((prev)=>prev-2)
  };
//   !pending

  // pending handle change
  return (
    <div>
      <div className=" flex">
        {/* {secret} */}
        {secret.map((item, id) => {
          return (
            <input
              type="text"
              key={id}
              id={"tab" + id}
              onKeyDown={(e) => {
                if (e.key == "Backspace") handleDelete(id);
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
