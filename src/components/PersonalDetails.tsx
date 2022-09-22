import React, { useState } from "react";
// import context;
import { RegContext } from "../pages/Home";
// import icons;
import ArrowLeft from "../assets/images/arrow-left.svg";
import User from "../assets/images/user-icon.svg";
import Store from "../assets/images/store-icon.svg";
import Calendar from "../assets/images/calendar-icon.svg";
// import datepicker;
import DatePicker from "react-datepicker";
import { IContext } from "../interface";

const PersonalDetails = () => {
  const { nextStep, prevStep, onChange, startDate, setStartDate } =
    React.useContext(RegContext) as IContext;
  // const [date] = useState("");

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
              Create an SME account
            </h3>
            <p className="text-sm xl:text-base">
              The information provided will help us to better know you.
            </p>
          </div>
          <div className="w-full   lg:w-5/6   xl:w-4/6 mx-auto">
            <form onSubmit={moveToNext}>
              <div className="text-start mb-5">
                <label className="text-darker text-base font-semibold">
                  Full Name
                </label>
                <div className="flex items-center bg-grey py-3 mt-1">
                  <img src={User} alt="user-icon" className="px-5  h-4" />
                  <input
                    onChange={onChange}
                    type="text"
                    placeholder="Enter First and Last Name"
                    className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none "
                    required
                  />
                </div>
              </div>
              <div className="text-start mb-5">
                <label className="text-darker text-base font-semibold">
                  Business Name
                </label>
                <div className="flex items-center bg-grey py-3 mt-1">
                  <img src={Store} alt="user-icon" className="px-5  h-4" />
                  <input
                    onChange={onChange}
                    type="text"
                    placeholder="Enter your business name"
                    className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none "
                    required
                  />
                </div>
              </div>
              <div className="text-start mb-5">
                <label className="text-darker text-base font-semibold">
                  Date of Birth
                </label>
                <div className=" bg-grey py-3 pl-5 relative mt-1">
                  <DatePicker
                    dateFormat="dd-MM-yyyy"
                    placeholderText="mm/dd/yyyy"
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    closeOnScroll={false}
                    name="dob"
                    // showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none"
                    maxDate={new Date()}
                  />
                  <div className="bg-blue absolute right-0 top-0 h-full flex items-center justify-center">
                    <img src={Calendar} alt="user-icon" className="px-5 h-5" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue text-white border-0 rounded-md w-full py-3 font-semibold"
              >
                Continue
              </button>
              <button
                className="lg:hidden bg-white text-blue border-2 border-blue rounded-md w-full mt-3 py-3 font-semibold"
                onClick={goBack}
              >
                Back
              </button>
            </form>
          </div>
          <div className="mt-8">
            <p className="text-lg font-medium mb-6">
              Already have an account?
              <span className="text-blue ml-1 font-semibold">Sign in</span>
            </p>

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

export default PersonalDetails;
