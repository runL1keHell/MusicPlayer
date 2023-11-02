import React, {useEffect, useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router";

type SearchBarProps = {
    className?: string;
    innerIcon: JSX.Element;
}

export const SearchBar = ({className, innerIcon}: SearchBarProps) => {
    const [showIcon, setShowIcon] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    const handleInputFocus = (): void => {
        setShowIcon(false);
    };
    const handleInputBlur = (): void => {
        setShowIcon(true)
    };

    useEffect((): void => {
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
                onFocus={(): void => {
                    handleInputFocus();
                    navigate('/search');
                }}
                onBlur={(): void => {
                    inputValue ?  handleInputFocus() : handleInputBlur();
                    inputValue ? "" : navigate('/');
                }}
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>): null  => e.key === 'Enter' ? null : null}
            />
            {innerIcon && showIcon && 
                (innerIcon)
            }
        </div>
    )
}