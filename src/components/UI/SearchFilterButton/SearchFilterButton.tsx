import {ButtonHTMLAttributes} from "react";

type Button = {
    name: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
type SearchFilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Button;

export const SearchFilterButton = ({name, className, ...props}:  SearchFilterButtonProps) => {
    return (
    <button
        className={`w-fit px-4 h-[30px] rounded-2xl border-blue-500 border-2 bg-gray-900 text-[#76CCFB] font-bold hover:bg-gray-900 transition-all duration-200 ease-in-out focus:bg-gray-800 
            ${className}`}
        {...props}
    >
        {name}
    </button>
)}