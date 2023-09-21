import { SearchBar } from "../../UI/SearchBar/SearchBar"
import { Logo }  from "../../../assets/images/logo.tsx";
import { Bell } from "../../../assets/images/bell.tsx";
import { Player } from "../../../assets/images/playerListPlay.tsx";
import { History } from "../../../assets/images/timeHistory.tsx";
import { Star } from "../../../assets/images/star.tsx";
import { useNavigate } from "react-router-dom";
import { MenuStatus } from "../../../layout/PrimaryLayout/PrimaryLayout.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC<MenuStatus> = ({menuVisible}) => {
    const buttonStyle = 'w-[24px] h-[24px] cursor-pointer';
    const navigate = useNavigate();
    return (
        <header className={`h-[81px] fixed z-10 top-0 right-0 shadow-md flex justify-evenly items-center cursor-pointer transition-all duration-300 ease-in-out' 
        ${menuVisible ?
        'w-[76%]  ' :  
        'w-[94.9%]' }`}
        >
            <Logo onClick={() => navigate('/')} className="w-[31px] h-[41px]" />
            <SearchBar 
                innerIcon={<FontAwesomeIcon
                    icon={faMagnifyingGlass} 
                    color='#76CCFB' 
                    className='w-[24px] h-[24px] absolute left-[15px] top-[8px] bg-white cursor-pointer' 
                />} 
                className="pl-[0px]" 
            />
            <History className={buttonStyle} />
            <Bell className={buttonStyle} />
            <Star className={buttonStyle} />
            <Player className={buttonStyle} />
        </header>
    )
}