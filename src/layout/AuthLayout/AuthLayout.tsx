import { useNavigate } from "react-router"
import { BiggerLogo } from "../../assets/images/biggerLogo"
import { Musion } from "../../assets/images/musion"
import { Input } from "../../components/UI/Input/Input"

export const AuthLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="w-[100%] h-[37vh] pt-[30px] px-[30px] flex flex-wrap justify-between">
                <div className="flex">
                    <BiggerLogo width="152" height="201" onClick={() => navigate('/')} className="cursor-pointer" />
                    <Musion width="196" height="52" onClick={() => navigate('/')} className="cursor-pointer ml-[32px] mt-[109px]" />
                </div>
                <span className="mt-[109px] text-[#76CCFB] text-[36px]">
                    The ultimate destination of <br /> your music
                </span>
            </header>
            <section className="w-[100%] h-[63vh] bg-[#76CCFB]">
                <label htmlFor="input" className="text-[white]">Sign Up</label>
                <Input type="email" placeholder="E-mail" className="" />
            </section>
        </>
        
    )
}