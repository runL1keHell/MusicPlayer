import { Href } from "../../UI/Href/Href"
import { User } from "../../../assets/images/user.tsx"
import { useNavigate } from "react-router-dom";

type MenuType = {
    menuVisible: boolean;
    toggleMenu: () => void;
}

export const Menu: React.FC<MenuType> = ({menuVisible, toggleMenu}) => {
    // const [menuVisible, setMenuVisible] = useState(true);
    const hrefStyling = 'mt-[23px]';
    const navigate = useNavigate();

    return (
        <nav className={`w-[23%] h-screen ml-[15px] border-r-[1px] border-[#00000066] ${menuVisible ? 'translate-x-0' : '-translate-x-[82%]'} transition-transform duration-300 ease-in-out flex flex-col`}>
            <button className="mt-[30px] mr-[30px] flex flex-col items-end" onClick={toggleMenu}>
                <div className="w-6 h-[3px] bg-white mb-1"></div>
                <div className="w-6 h-[3px] bg-white mb-1"></div>
                <div className="w-6 h-[3px] bg-white"></div>
            </button>
            {menuVisible 
            ? 
            <>
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
            </> 
            : null}
            
        </nav>
    )
}

