import React, {useEffect, useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router";
import {searchSongsByName} from "../../../API/search.ts";

type SearchBarProps = {
    className?: string;
    innerIcon: JSX.Element;
}

export const SearchBar = ({className, innerIcon}: SearchBarProps) => {
    const [isFocusedOnInput, setIsFocusedOnInput] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={`w-[60%] h-[37px]  relative ${className}`}>
            <input 
                className={`w-[100%] h-[100%] pl-[10px] bg-white rounded-[19px] shadow-inner md:shadow-lg`}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setInputValue(e.target.value);
                    navigate(`/search/${e.target.value}`)
                }}
                onFocus={(): void => {
                    setIsFocusedOnInput(true);
                    // navigate('/search');
                }}
                onBlur={(): void => {
                    inputValue ?  setIsFocusedOnInput(true) : setIsFocusedOnInput(false);
                    inputValue ? "" : navigate(-1);
                }}
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>): null  => e.key === 'Enter' ? null : null}
            />
            {innerIcon && !isFocusedOnInput &&
                (innerIcon)
            }
        </div>
    )
}