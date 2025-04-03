import React from "react";
import { FaCheck } from "react-icons/fa";

const StepIndicator = ({ step, darkMode }) => {
    const stepTitles = ["Data Diri", "Informasi Divisi", "Konfirmasi"];

    return (
        <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between">
                {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex flex-col items-center">
                        <div
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mb-1 sm:mb-2 text-xs sm:text-base
                            ${step === stepNum
                                    ? "bg-blue-500 text-white"
                                    : step > stepNum
                                        ? "bg-green-500 text-white"
                                        : darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {step > stepNum ? <FaCheck className="text-xs sm:text-sm" /> : stepNum}
                        </div>
                        <span className={`text-xs hidden sm:block ${step === stepNum ? "font-bold" : ""}`}>
                            {stepTitles[stepNum - 1]}
                        </span>
                    </div>
                ))}
            </div>

            <div className="relative mt-2">
                <div className={`absolute top-0 left-0 h-1 ${darkMode ? "bg-gray-700" : "bg-gray-200"} w-full rounded-full`}></div>
                <div
                    className={`absolute top-0 left-0 h-1 bg-blue-500 rounded-full transition-all duration-300`}
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default StepIndicator;