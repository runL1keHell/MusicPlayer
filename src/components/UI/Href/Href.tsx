type HrefProps = { 
    name: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Href = ({name, className, onClick}: HrefProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onClick ? onClick(e) : null;
      };
    return (
        <a 
        className={`w-fit text-[#76CCFB] text-[20px] cursor-pointer hover:text-white active:text-white ${className}`}
        onClick={handleClick}
        >
            {name}
        </a>
    )
}  