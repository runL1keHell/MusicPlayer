import { SearchBar } from "../../UI/SearchBar/SearchBar"
import logo from "../../../assets/images/logo.svg";
import bell from "../../../assets/images/bell.svg";
import player from "../../../assets/images/player-list-play.svg";
import history from "../../../assets/images/time-history.svg";
import star from "../../../assets/images/star.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const buttonStyle = 'w-[24px] h-[24px] cursor-pointer'
    const navigate = useNavigate();
    return (
        <header className="w-[76%] h-[81px] sticky flex justify-evenly items-center cursor-pointer">
            <img src={logo} onClick={() => navigate('/')} className="w-[31px] h-[41px]" alt="icon" />
            <SearchBar className="" />
            <img src={history} className={buttonStyle} alt="history" />
            <img src={bell} className={buttonStyle} alt="bell" />
            <img src={star} className={buttonStyle} alt="star" />
            <img src={player} className={buttonStyle} alt="player" />
        </header>
    )
}