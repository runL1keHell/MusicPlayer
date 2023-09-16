import { SearchBar } from "../../UI/SearchBar/SearchBar"
import { Logo }  from "../../../assets/images/logo.tsx";
import { Bell } from "../../../assets/images/bell.tsx";
import { Player } from "../../../assets/images/playerListPlay.tsx";
import { History } from "../../../assets/images/timeHistory.tsx";
import { Star } from "../../../assets/images/star.tsx";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const buttonStyle = 'w-[24px] h-[24px] cursor-pointer';
    const navigate = useNavigate();
    return (
        <header className="w-[76%] h-[81px] sticky shadow-md flex justify-evenly items-center cursor-pointer">
            <Logo onClick={() => navigate('/')} className="w-[31px] h-[41px]" />
            <SearchBar className="pl-[0px]" />
            <History className={buttonStyle} />
            <Bell className={buttonStyle} />
            <Star className={buttonStyle} />
            <Player className={buttonStyle} />
        </header>
    )
}