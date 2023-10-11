import React, {useEffect, useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router";

type SearchBarProps = {
    className?: string;
    innerIcon: JSX.Element;
}

export const SearchBar: React.FC<SearchBarProps> = ({className, innerIcon}) => {
    const [showIcon, setShowIcon] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    const handleInputFocus = () => {
        setShowIcon(false);
    };
    const handleInputBlur = () => {
        setShowIcon(true)
    };

    useEffect(() => {
        (async () => {

        })()
    },[inputValue]);

    return (
        <div className={`w-[60%] h-[37px]  relative ${className}`}>
            <input 
                className='w-[100%] h-[100%] pl-[10px] bg-white rounded-[19px] shadow-inner md:shadow-lg' 
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setInputValue(e.target.value);
                    navigate(`/search/${inputValue}`)
                }}
                onFocus={() => {
                    handleInputFocus();
                    navigate('/search');
                }}
                onBlur={() => {
                    inputValue ?  handleInputFocus() : handleInputBlur();
                    inputValue ? null : navigate('/');
                }}
                onKeyDown={e => e.key === 'Enter' ? console.log('Enter has been pressed') : null}
            />
            {innerIcon && showIcon && 
                (innerIcon)
            }
        </div>
    )
}