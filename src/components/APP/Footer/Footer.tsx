import { faForwardStep, faPause, faPlay, faShuffle, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <footer className="w-[76vw] h-[71px] pr-[42px] flex justify-between fixed right-0 bottom-0 rounded-[65px] border border-[#00000066]">
            <div className="w-[72px] h-[72px] bg-cover bg-[url(https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg/220px-Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg)] rounded-[72px] cursor-pointer"></div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-[20px] text-[#76CCFB] cursor-pointer">Down In A Hole</span>
                <span className="text-[14px] text-[#76CCFB] cursor-pointer">Alice In Chains</span>
            </div>
            <div className="w-[133px] flex justify-evenly items-center">
                <FontAwesomeIcon icon={faForwardStep} color="#76CCFB" flip="horizontal" className="w-[24px] h-[24px] cursor-pointer" />
                <FontAwesomeIcon icon={faPlay} color="#76CCFB" className="w-[14px] h-[20px] cursor-pointer" />
                <FontAwesomeIcon icon={faForwardStep} color="#76CCFB" className="w-[24px] h-[24px] cursor-pointer" />
                {/* <FontAwesomeIcon icon={faPause} /> */}
            </div>
            <div className="flex items-center">
                <span className="w-[340px] h-[6px] bg-[#76CCFB] cursor-pointer"></span>    
            </div>
            <div className="w-[140px] flex justify-between items-center">
                <span className="text-[10px] text-[#FFF]">
                    02:28
                </span>
                <FontAwesomeIcon icon={faShuffle} color="#76CCFB" className="w-[24px] h-[24px] cursor-pointer" />
                <FontAwesomeIcon icon={faStar} color="#76CCFB" className="w-[24px] h-[24px] cursor-pointer" />
            </div>
        </footer>
    )
}