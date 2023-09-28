import {NavigateFunction, Outlet, useNavigate} from "react-router"
import { BiggerLogo } from "../../assets/images/biggerLogo"
import { Musion } from "../../assets/images/musion"

export const AuthLayout: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <header className="w-[100%] h-[30vh] pt-[30px] px-[30px] flex flex-wrap justify-between">
                <div className="flex" onClick={() => {navigate('/')}}>
                    <BiggerLogo width="135" height="180" className="cursor-pointer" />
                    <Musion width="196" height="52" className="cursor-pointer ml-[32px] mt-[70px]" />
                </div>
                <span className="mt-[50px] text-[#76CCFB] text-[36px]">
                    The ultimate destination of <br /> your music
                </span>
            </header>
            <section className="w-[100%] h-[70vh] flex flex-col items-center justify-center bg-[#76CCFB]">
                <Outlet />
            </section>
        </>
        
    )
}