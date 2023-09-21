import { useState } from 'react';

type SearchBarProps = {
    className?: string;
    innerIcon: JSX.Element;
}

export const SearchBar: React.FC<SearchBarProps> = ({className, innerIcon}) => {
    const [showIcon, setShowIcon] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    
    const handleInputFocus = () => {
        setShowIcon(false);
    };
    const handleInputBlur = () => {
        setShowIcon(true)
    };
    
    return (
        <div className={`w-[60%] h-[37px]  relative ${className}`}>
            <input 
                className='w-[100%] h-[100%] pl-[10px] bg-white rounded-[19px] shadow-inner md:shadow-lg' 
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={() => {
                    inputValue ?  handleInputFocus() : handleInputBlur();
                }} 
                onKeyDown={e => e.key === 'Enter' ? console.log('Enter has been pressed') : null}
                // onChange={(e) => {
                //     e.target.value ? handleInputBlur : handleInputFocus
                // }}
            />
            {innerIcon && showIcon && 
                (innerIcon)
            }
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} color='#76CCFB' className='w-[24px] h-[24px] absolute left-[15px] top-[8px] bg-white cursor-pointer' /> */}
        </div>
    )
}