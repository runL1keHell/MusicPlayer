import { faForwardStep, faPause, faPlay, faShuffle, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MenuStatus } from "../../../layout/PrimaryLayout/PrimaryLayout"
import { useState } from "react"
import React from "react";

export const Footer = ({menuVisible}: MenuStatus) => {
    const [isPlaying, setIsPlayng] = useState<boolean>(false);
    
    return (
        <footer className={`h-[71px] pr-[42px] flex justify-between fixed right-0 bottom-0 rounded-[65px] border border-[#00000066] transition-all duration-300 ease-in-out
            ${menuVisible ? 'w-[76vw]' : 'w-[94.9%]' }
        `}>
            <div className="w-[72px] h-[72px] bg-cover bg-[url()] rounded-[72px] cursor-pointer"></div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-[20px] text-[#76CCFB] cursor-pointer">Song Name</span>
                <span className="text-[14px] text-[#76CCFB] cursor-pointer">Artist Name</span>
            </div>
            <div className="w-[133px] flex justify-evenly items-center">
                <FontAwesomeIcon icon={faForwardStep} color="#76CCFB" flip="horizontal" className="w-[24px] h-[24px] cursor-pointer" />
                {isPlaying ? 
                    <FontAwesomeIcon icon={faPause} onClick={() => {setIsPlayng(prev => !prev)}} color="#76CCFB" className="w-[14px] h-[20px] cursor-pointer" /> :
                    <FontAwesomeIcon icon={faPlay} onClick={() => {setIsPlayng(prev => !prev)}} color="#76CCFB" className="w-[14px] h-[20px] cursor-pointer" />
                }
                <FontAwesomeIcon icon={faForwardStep} color="#76CCFB" className="w-[24px] h-[24px] cursor-pointer" />
            </div>
            <div className="flex items-center">
                <span className="w-[340px] h-[6px] bg-[#76CCFB] cursor-pointer"></span>    
            </div>
            <div className="w-[140px] flex justify-between items-center">
                <span className="text-[10px] text-[#FFF]">
                    02:28
                </span>
                <FontAwesomeIcon icon={faShuffle} color="#76CCFB" className="w-[24px] h-[24px] cursor-pointer" />
                <FontAwesomeIcon icon={faStar} color="#76CCFB"  className="w-[24px] h-[24px] cursor-pointer" />
            </div>
        </footer>
    )
}