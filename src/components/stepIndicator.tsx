import React from "react";
// icons Import
import { ReactComponent as Check } from "../assets/images/checkIcon.svg";
import { ReactComponent as CheckIcon } from "../assets/images/check-icon.svg";
//Context Import
import { RegContext } from "../pages/Home";
import { IContext } from "../interface";

const StepIndicator = () => {
  //use Context
  const { step } = React.useContext(RegContext) as IContext;

  return (
    <div>
      <div className=" lg:hidden mt-6 w-5/6 mx-auto flex items-center flex-wrap justify-center text-xs xl:text-17 text-dark">
        <div className="flex flex-col justify-center items-center">
          <div
            className={` p-2 rounded-[50%] ${
              step > 1 ? "bg-blue text-white" : "bg-white border border-blue"
            }`}
          >
            <i>
              <CheckIcon />
            </i>
          </div>{" "}
          <span className="text-[#B1B1B1] font-bold mt-2 ">1</span>{" "}
        </div>

        <hr className="grow h-4 text-blue mb-2" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={` p-2 rounded-[50%] ${
              step > 2 ? "bg-blue text-white" : "bg-white border border-blue"
            }`}
          >
            <i>
              <CheckIcon />
            </i>
          </div>{" "}
          <span className="text-[#B1B1B1] font-bold mt-2 ">2</span>{" "}
        </div>

        <hr className="grow h-4 text-blue mb-2" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={` p-2 rounded-[50%] ${
              step > 3 ? "bg-blue text-white" : "bg-white border border-blue"
            }`}
          >
            <i>
              <CheckIcon />
            </i>
          </div>{" "}
          <span className="text-[#B1B1B1] font-bold mt-2 ">3</span>{" "}
        </div>

        <hr className="grow h-4 text-blue mb-2" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={` p-2 rounded-[50%] ${
              step > 4 ? "bg-blue text-white" : "bg-white border border-blue"
            }`}
          >
            <i>
              <CheckIcon />
            </i>
          </div>{" "}
          <span className="text-[#B1B1B1] font-bold mt-2 ">4</span>{" "}
        </div>
      </div>

      <div className=" hidden mt-6  lg:flex items-center flex-wrap justify-center text-xs xl:text-17 text-dark">
        <div
          className={` rounded-3xl mb-3 lg:mb-0   flex items-center min-w-[10rem] max-w-fit text-center ${
            step > 1 ? "bg-blue text-white" : "bg-grey text-dark"
          }`}
        >
          <p className="flex items-center  whitespace-nowrap py-2 px-3 mx-auto">
            Select Account
            {step > 1 ? (
              <i className="pl-3 text-end">
                <Check />
              </i>
            ) : null}
          </p>
        </div>
        <hr
          className={`grow h-3   lg:mt-3 ${
            step > 1 ? "text-blue" : "text-[#ECECEC]"
          }`}
        />
        <div
          className={` rounded-3xl mb-3 lg:mb-0  flex items-center  min-w-[10rem] max-w-fit text-center ${
            step === 2
              ? "bg-transparent border-2 border-blue"
              : step > 2
              ? "bg-blue text-white"
              : "bg-grey"
          } `}
        >
          <span className="flex items-center  whitespace-nowrap py-2 px-3 mx-auto">
            Personal Details
            {step > 2 ? (
              <i className="pl-3 text-end">
                <Check />
              </i>
            ) : null}
          </span>
        </div>
        <hr
          className={`grow h-3  mt-3 ${
            step > 2 ? "text-blue" : "text-[#ECECEC]"
          }`}
        />
        <div
          className={` rounded-3xl   flex items-center  min-w-[10rem] max-w-fit text-center ${
            step === 3
              ? "bg-transparent border-2 border-blue"
              : step > 3
              ? "bg-blue text-white"
              : "bg-[#ECECEC]"
          } `}
        >
          <span className="flex items-center  whitespace-nowrap py-2 px-3 mx-auto">
            More Details
            {step > 3 ? (
              <i className="pl-3 text-end">
                <Check />
              </i>
            ) : null}
          </span>
        </div>
        <hr
          className={`grow h-3 mt-3 ${
            step > 3 ? "text-blue" : "text-[#ECECEC]"
          }`}
        />
        <div
          className={` rounded-3xl   flex items-center  min-w-[10rem] max-w-fit text-center ${
            step === 4
              ? "bg-transparent border-2 border-blue"
              : step > 4
              ? "bg-blue text-white"
              : "bg-[#ECECEC]"
          } `}
        >
          <span className="flex items-center  whitespace-nowrap py-2 px-3 mx-auto">
            Finish
            {step > 4 ? (
              <i className="pl-3 text-end">
                <Check />
              </i>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
