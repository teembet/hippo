import React, { useRef, useState, useEffect, ChangeEvent } from "react";
// import context;
import { RegContext } from "../pages/Home";
// import icons;
import ArrowLeft from "../assets/images/arrow-left.svg";
import Warning from "../assets/images/warning-icon.svg";
import { IContext } from "../interface";

const Verification = () => {
  const { nextStep, prevStep } = React.useContext(RegContext) as IContext;
  const [timer, setTimer] = useState("01:30");

  const TimeRef = useRef<number | null>(null);
  const getTimeRemaining = (value: React.FormEvent) => {
    const total =
      Date.parse(value.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        // (hours > 9 ? hours : "0" + hours) +
        //   ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e: any) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("01:30");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (TimeRef.current) clearInterval(TimeRef.current);
    const id = window.setInterval(() => {
      startTimer(e);
    }, 1000);
    TimeRef.current = id;
  };

  const getDeadLine = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 90);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadLine());
    /* eslint-disable */
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  //   const onClickReset = () => {
  //     clearTimer(getDeadTime());
  //   };

  const ref1 = useRef<HTMLInputElement | null>(null);
  const ref2 = useRef<HTMLInputElement | null>(null);
  const ref3 = useRef<HTMLInputElement | null>(null);
  const ref4 = useRef<HTMLInputElement | null>(null);
  const ref5 = useRef<HTMLInputElement | null>(null);
  const ref6 = useRef<HTMLInputElement | null>(null);
  const [otp, setOtp] = useState("");

  const handleChange = (ref: any, e: any) => {
    console.log(e, "e");
    let val = e.target.value;
    if (val === "") {
      ref1.current = null;
      ref2.current = null;
      ref3.current = null;
      ref4.current = null;
      ref5.current = null;
      ref6.current = null;
      setOtp("");
    } else {
      setOtp(`${otp}${val}`);
      ref.current.focus();
    }
  };

  const goBack = () => {
    prevStep();
  };
  const moveToNext = () => {
    nextStep();
  };

  return (
    <div className="my-4 text-center text-dark">
      <div
        className="mt-4 hidden lg:flex items-center w-fit  cursor-pointer "
        onClick={goBack}
      >
        <img src={ArrowLeft} alt="user-icon" className="pr-5  h-5" />
        <span className="underline text-sm xl:text-17">Go Back</span>
      </div>

      <div className="w-full lg:w-4/6 mx-auto">
        <div className="flex flex-col ">
          <div className="mb-5">
            <h3 className="text-2xl  xl:text-37 font-semibold">
              Verify your account
            </h3>
            <p className="text-sm xl:text-base font-medium">
              Please enter the OTP token sent to your{" "}
              <span className="text-blue font-semibold"> Email</span>,{" "}
              <span className="text-blue font-semibold">+23473401486346 </span>
              and <span className="text-blue font-semibold">WhatsApp</span>
            </p>
          </div>
          <div className="w-full   lg:w-5/6   xl:w-7/12 mx-auto">
            <div className=" grid grid-cols-6 gap-2 my-6">
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref1}
                onKeyUp={(e) => handleChange(ref2, e)}
              />
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref2}
                onKeyUp={(e) => handleChange(ref3, e)}
              />
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref3}
                onKeyUp={(e) => handleChange(ref4, e)}
              />
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref4}
                onKeyUp={(e) => handleChange(ref5, e)}
              />
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref5}
                onKeyUp={(e) => handleChange(ref6, e)}
              />
              <input
                type="number"
                placeholder="*"
                className="h-12 rounded-lg bg-grey col-span-1 placeholder:text-center focus:outline-blue text-center"
                ref={ref6}
                onKeyUp={(e) => {
                  ref6?.current?.blur();
                  // setOtp(`${otp}${e.target.value}`)
                  // handleSubmit(e.target.value)
                }}
              />
            </div>
          </div>

          <p className="my-3">Having trouble? Resend OTP in {timer}</p>

          <div className="p-6 flex items-center bg-customOpaque rounded my-5">
            <img src={Warning} alt="warning" />
            <p>
              Please do not refresh this page at any point. You can request for
              a new OTP when the timer finishes.
            </p>
          </div>
          <div className="w-full   lg:w-5/6   xl:w-7/12 mx-auto">
            <button
              className="bg-blue text-white border-0 rounded-md w-full py-3 font-semibold"
              onClick={moveToNext}
            >
              Finish
            </button>
            <button
              className="lg:hidden bg-white text-blue border-2 border-blue rounded-md w-full mt-3 py-3 font-semibold"
              onClick={goBack}
            >
              Back
            </button>
          </div>

          <div className="mt-8">
            <p className="text-lg font-medium">
              Read our
              <span className="text-blue ml-1 font-normal">
                Terms Policy - Privacy Policy - FAQs
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
