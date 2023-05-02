import React, { useState } from "react";

const DropdownV1 = ({
  options,
  placeholder = "Please select an option",
  inputPlaceholder,
  visibleIconCheck = false,
  visibleSearch = false,
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
        onClick={handleToggleDropdown}
      >
        {placeholder}
      </div>
      {show && (
        <div className="border border-gray-300 rounded options">
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <div
                className="flex items-center justify-between p-4 cursor-pointer option-item"
                key={option.title}
                onClick={option.onClick}
              >
                <span>{option.title}</span>
                {visibleIconCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            ))}
          {visibleSearch && (
            <div className="p-2">
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="w-full p-4 border border-gray-200 rounded outline-none"
                onChange={onChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownV1;
