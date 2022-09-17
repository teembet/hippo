import React, { useState } from "react";
// import icons;
import SME from "../assets/images/sme.svg";
import Partner from "../assets/images/partner.svg";
// import context;
import { RegContext } from "../pages/Home";
import { IContext } from "../interface";

const AccountSelection: React.FC = () => {
  const { nextStep } = React.useContext(RegContext) as IContext;

  const [isSME, setIsSME] = useState(true);

  const moveToNext = () => {
    nextStep();
  };

  return (
    <div className="w-11/12  lg:w-2/3 xl:w-2/3 flex flex-col mx-auto text-center text-dark mt-12">
      <h4 className="text-left  font-semibold mb-1">Select Your Account</h4>
      <p className="text-lg text-left">
        Select the account you would like to sign up with
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div
          className={`border-2 border-[#E4E4E4] rounded-[10px] p-5 pt-8 text-start flex flex-col justify-between cursor-pointer ${
            !isSME ? "opacity-50" : ""
          }`}
          onClick={() => {
            setIsSME(true);
          }}
        >
          <div>
            <img src={SME} alt="" className="h-8" />
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-37 mb-2">SMEs</h4>
            <p className="text-lg font-medium">
              Access loans, banking and insurance services to grow business.
            </p>
          </div>
          <button
            className="bg-blue text-white border-0 rounded-md w-full py-2 font-semibold"
            onClick={moveToNext}
            disabled={!isSME}
          >
            Create Account
          </button>
        </div>
        <div
          className={`border-2 border-[#E4E4E4] rounded-[10px] p-5 pt-8 text-start flex flex-col justify-between cursor-pointer ${
            isSME ? "opacity-50" : ""
          }`}
        >
          <div>
            <img src={Partner} alt="" className="h-8" />
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-37 mb-2">Partner</h4>
            <p className="text-lg font-medium">
              Access API driven integrations and services.
            </p>
          </div>
          <button
            className="bg-blue text-white border-0 rounded-md w-full py-2 font-semibold"
            disabled={isSME}
          >
            Create Account
          </button>
        </div>
      </div>

      <div>
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
  );
};

export default AccountSelection;
