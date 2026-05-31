import { useState } from "react";
import OtpBox from "./OtpBox";

const Otp_window = () => {
  const [mobile, setMobile] = useState("");
  const [submit, setSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleSubmit = () => {
    const isValidMobile = /^\d{10}$/.test(mobile);

    isValidMobile
      ? setSubmit(mobile)
      : setAlertMessage("Invalid mobile number");
    console.log("handle submit activated", mobile, submit, isValidMobile);
  };

  return (
    <div className="flex h-dvh justify-center border border-amber-600">
      <div className="flex  my-24 items-center  flex-col  w-1/2  min-w-96   border">
        <h1 className="text-amber-600 text-3xl  m-5 ">Login</h1>

        {submit ? (
          <OtpBox length={5} />
        ) : (
          <div className="m-5 flex flex-col items-center">
            <input
              type="text"
              placeholder="Mobile no."
              className="border rounded-lg p-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              maxLength={10}
              onChange={(e) => setMobile(e.currentTarget.value)}
              value={mobile}
            ></input>
            <button
              type="button"
              onClick={handleSubmit}
              className="my-3 w-28 text-center text-lg rounded-3xl hover:bg-amber-900   duration-100 border border-amber-800 cursor-pointer p-2"
            >
              Submit
            </button>
            <div className="text-red-700">{alertMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Otp_window;
