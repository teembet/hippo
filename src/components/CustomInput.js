/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

const CustomInput = forwardRef(function Input(
  {
    type,
    placeholder,
    name,
    id,
    disabled,
    value,
    additionalFunc,
    onChange,
    onKeyDown,
    onKeyUp,
    paddingY,
    paddingX,
    border,
    placeholderColor,
    fontSize,
    ...props
  },
  ref
) {
  return (
    <React.Fragment>
      <input
        className={`${
          border ? border : "border-0"
        }   text-md xl:text-lg text-dark bg-grey  w-full placeholder:text-muted focus:outline-none `}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        ref={ref}
        disabled={disabled}
        onChange={(e) => {
          onChange(e);
          additionalFunc && additionalFunc(e);
        }}
        onKeyDown={onKeyDown}
        value={value}
        onKeyUp={onKeyUp}
        {...props}
      />
    </React.Fragment>
  );
});
export default CustomInput;
