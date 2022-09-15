import React, { useContext } from "react";
// import context
import { RegContext } from "../pages/Home";
// import icons;
import ArrowLeft from "../assets/images/arrow-left.svg";
import Email from "../assets/images/email-icon.svg";
// import PhoneInput from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";

const MoreDetails = () => {
  const { phone, setPhone, nextStep, prevStep } = useContext(RegContext);

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

      <div className="w-full lg:w-4/6 mx-auto mt-4">
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
            <div className="text-start mb-5">
              <label className="text-darker text-base font-semibold ">
                Email
              </label>
              <div className="flex items-center bg-grey py-3 mt-1">
                <img src={Email} alt="user-icon" className="px-5  h-4" />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none "
                />
              </div>
            </div>

            <div className="text-start mb-5">
              <label className="text-darker text-base font-semibold ">
                Phone Number
              </label>
              <div className="flex items-center bg-grey py-3 mt-1">
                {/* <input
                  type="text"
                  className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none "
                /> */}
                <PhoneInput
                  international
                  defaultCountry="NG"
                  countryCodeEditable={false}
                  inputStyle={{ backgroundColor: "transparent", border: "0" }}
                  buttonStyle={{ border: "0" }}
                  dropdownStyle={{ backgroundColor: "#F2F2F2" }}
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                  country={"ng"}
                />
              </div>
            </div>
            <div className="text-start mb-5">
              <label className="text-darker text-base font-semibold ">
                Referral Code <span className="font-normal"> (Optional)</span>
              </label>
              <div className="flex items-center bg-grey py-3 mt-1">
                <input
                  type="text"
                  className="text-md xl:text-lg text-dark bg-transparent  w-full placeholder:text-muted focus:outline-none "
                />
              </div>
            </div>

            <button
              className=" bg-blue text-white border-0 rounded-md w-full py-3 font-semibold"
              onClick={moveToNext}
            >
              Continue
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

export default MoreDetails;
