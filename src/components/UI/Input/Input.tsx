import React, { InputHTMLAttributes } from "react";

type Input = {
    className?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Input;

export const Input = ({className, ...props} :InputProps) => {
    return (
        <>
            <input
                {...props}
                className={`${className} w-[579px] h-[35px] text-black text-[18px] rounded-[3px] bg-white placeholder:text-[20px] pl-[15px] flex items-center`}
            />
        </>

    )
}
