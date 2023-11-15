import {useNavigate} from "react-router";

export const UnsuccessfullyVerifiedMail = () => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col items-center bg-[#76CCFB]">
            <h1 className="text-white text-[30px] font-bold bg-[#76CCFB]">Verification of your email went wrong!</h1>
            <span className="text-white text-[20px] mt-[30px] bg-[#76CCFB] mb-[40px]">Please, check your mail or try to sign in once more.</span>
            <button className="w-[200px] h-[50px] text-white font-bold text-[20px] bg-[#0F1E36]" onClick={() => navigate('/signin')}>Sign In</button>
        </section>
    )
}