type InputProps = {
    className: string;
    placeholder: string;
    type: string;
}

export const Input:React.FC<InputProps> = ({type, placeholder, className}) => {
    return (
        <input type={type} placeholder={placeholder} className={`w-[579px] h-[44px] text-black text-[20px] rounded-[3px] bg-white placeholder:text-[24px] pl-[15px] flex items-center ${className}`} />
    )
}