import React, { ChangeEvent, useState, createContext } from "react";
import { Step1, Step2, Step3, Step4, ProgressBar } from "../components";
import { ReactComponent as Payhippo } from "../assets/images/payhippo.svg";
import { IContext } from "../interface";
export const RegContext = createContext<IContext | null>(null);

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    some: "",
  });
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const nextStep = () => {
    if (step >= 4) {
      setStep(1);
    } else {
      setStep((next) => next + 1);
    }
  };
  const prevStep = () => {
    if (step <= 1) {
      return;
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    console.log(e, "name");
    setData((data) => ({
      ...data,

      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <RegContext.Provider
        value={{
          phone,
          setPhone,
          data,
          step,
          onChange,
          nextStep,
          prevStep,
          startDate,
          setStartDate,
        }}
      >
        <div className="lg:px-5 lg:pt-6 min-h-[95vh] flex flex-col items-center justify-center text-white text-lg">
          <div className="bg-white  w-full  lg:w-10/12 lg:min-h-[80vh] m-auto p-6">
            <div className="w-full  xl:w-9/12 mx-auto">
              <div className="flex flex-col justify-center items-center">
                <Payhippo />
              </div>
              {step > 1 && <ProgressBar />}
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
            </div>
          </div>
        </div>
      </RegContext.Provider>
    </div>
  );
};

export default Home;
