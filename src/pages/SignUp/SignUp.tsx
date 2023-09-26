import { Input } from "../../components/UI/Input/Input";
import {Button} from "../../components/UI/Button/Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import React, {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router";

export const SignUp: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <form action="" className="bg-[#76CCFB] flex flex-col justify-center items-center">

                <div className="w-auto bg-[#76CCFB] relative"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="text-[30px] font-bold bg-[#76CCFB] text-[#0F1E36]"
                    >
                        Sign In
                    </button>
                    <button
                        className={`w-[105px] absolute bg-[#76CCFB] text-[#0F1E36] text-[28px] font-bold transition-all duration-300 ease-in-out transform opacity-0 ${isHovered ? 'opacity-100 translate-x-5' : 'opacity-0 -translate-x-20'}`}
                        onClick={() => {navigate('/signin')}}
                    >
                        Sign Up
                    </button>
                </div>

                <Input type="text" placeholder="Username" className="mt-[35px]"/>
                <Input type="email" placeholder="E-mail" className="mt-[15px]" />
                <Input type="password" placeholder="Password" className="mt-[15px]" />
                <Input type="password" placeholder="Confirm Password" className="mt-[15px]" />
                <Button name="Continue" className="mt-[35px]" />
                <div className="mt-[30px] bg-[#76CCFB] flex items-center">
                    <span className="w-[173px] h-[1px] bg-black"></span>
                    <span className="bg-[#76CCFB] mx-[15px]">OR</span>
                    <span className="w-[173px] h-[1px] bg-black"></span>
                </div>
                <Button
                    name={<FontAwesomeIcon icon={faGoogle} className="bg-white" />}
                    className="w-[170px] mt-[30px]"
                    onClick={() => {}}
                />
            </form>
        </>
    )
}