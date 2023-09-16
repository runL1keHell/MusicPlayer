import { Href } from "../../UI/Href/Href"
import { User } from "../../../assets/images/user.tsx"
import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const hrefStyling = 'mt-[23px]';
    const navigate = useNavigate();

    return (
        <nav className="w-[23%] h-[100vh] ml-[15px] border-r-[1px]  flex flex-col">
            <button 
                className="mt-[30px] flex flex-col items-center justify-center"
                onClick={() => navigate('/auth')}    
            >
                <User width="42" height="42" />
                <Href name="Sign In / Sign Up" className="mt-[15px] text-[18px]" />
            </button>
            <div className="mt-[32px] flex flex-col">
                <Href name="Home" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Radio" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Podcast" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Downloads" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Library" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Go Premium" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Lauguage" className={hrefStyling} onClick={() => navigate('/')} />
                <Href name="Settings" className={hrefStyling} onClick={() => navigate('/')} />
            </div>
        </nav>
    )
}