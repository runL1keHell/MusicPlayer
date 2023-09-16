import { Outlet, useNavigate } from "react-router"
import { BiggerLogo } from "../../assets/images/biggerLogo"
import { Musion } from "../../assets/images/musion"
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";

export const AuthLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="w-[100%] h-[30vh] pt-[30px] px-[30px] flex flex-wrap justify-between">
                <div className="flex">
                    <BiggerLogo width="135" height="180" onClick={() => navigate('/')} className="cursor-pointer" />
                    <Musion width="196" height="52" onClick={() => navigate('/')} className="cursor-pointer ml-[32px] mt-[70px]" />
                </div>
                <span className="mt-[50px] text-[#76CCFB] text-[36px]">
                    The ultimate destination of <br /> your music
                </span>
            </header>
            <section className="w-[100%] h-[70vh] pt-[40px] flex flex-col items-center bg-[#76CCFB]">
                <label htmlFor="input" className="text-[30px] font-bold bg-[#76CCFB] text-[#0F1E36]">Sign Up</label>
                <Input type="email" placeholder="E-mail" className="mt-[35px]" />
                <Outlet />
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
            </section>
        </>
        
    )
}