import {ButtonHTMLAttributes} from "react";
import {FontawesomeObject} from "@fortawesome/fontawesome-svg-core";

type Button = {
    name: string | React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Button;

export const Button: React.FC<ButtonProps> = ({name, className, onClick}) => {
    return (
        <button
            className={`w-[232px] h-[50px] text-[24px] text-black bg-white rounded-[20px] ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}