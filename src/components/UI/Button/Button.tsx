import {ButtonHTMLAttributes} from "react";

type Button = {
    name: string | JSX.Element;
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