import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export const Playlist = () => {
    return (
        <section className="pl-[30px]">
            <div className="flex">
                <div className="w-[347px] h-[263px] relative rounded-[24px] bg-[url(https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/dirt_cover.jpg?itok=p8cv17Bi&timestamp=1506099877)] bg-cover">
                    <span className="uppercase absolute bottom-0 text-[#76CCFB] text-[30px] pr-[10px]">Alice In Chains</span>
                </div>
                <div className="text-[#76CCFB] ml-[50px]">
                    <h1 className="text-[48px] font-bold">Alice In Chains</h1>
                    <span className="text-[24px]">12 songs</span>
                    <div className="mt-[25px]">
                        <button className="w-[103px] h-[44px] rounded-[18px] bg-[#76CCFB] text-white">Play</button>
                        <button className="w-[103px] h-[44px] rounded-[18px]">Save</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 mt-[35px] text-[#76CCFB] ">
                <span>#</span>
                <span>Songs</span>
                <span>Duration</span>
                <span>Artist</span>
                <span>Album</span>
                <span>Add To Playlist</span>

                <span>1</span>
                <div>
                    <img src="" alt=""/>
                    <span>Song's name</span>
                </div>
                <span>2:28</span>
                <span>Alice In Chains</span>
                <span>Dirt</span>
                <span><FontAwesomeIcon icon={faPlus} /></span>

                <span>1</span>
                <div>
                    <img src="" alt=""/>
                    <span>Song's name</span>
                </div>
                <span>2:28</span>
                <span>Alice In Chains</span>
                <span>Dirt</span>
                <span><FontAwesomeIcon icon={faPlus} /></span>

                <span>1</span>
                <div>
                    <img src="" alt=""/>
                    <span>Song's name</span>
                </div>
                <span>2:28</span>
                <span>Alice In Chains</span>
                <span>Dirt</span>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>

        </section>
    )
}