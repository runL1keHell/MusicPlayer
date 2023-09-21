import { InputHTMLAttributes } from "react";

type Input = {
    className: string;
    placeholder: string;
    type: string; 
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Input;

export const Input:React.FC<InputProps> = (props) => {
    return (
        <input {...props} className={`${props.className} w-[579px] h-[44px] text-black text-[20px] rounded-[3px] bg-white placeholder:text-[24px] pl-[15px] flex items-center`} />
    )
}