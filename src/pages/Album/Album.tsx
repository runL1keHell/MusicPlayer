import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export const Album = () => {
    return (
        <section className="h-[calc(100vh-171px)] overflow-y-auto pl-[30px]">
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

            <table className="w-[98%] mt-[50px] rounded-lg">
                <thead>
                <tr className="text-[#76CCFB]">
                    <th className="px-4 py-2">Song Number</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Duration</th>
                    <th className="px-4 py-2">Artist</th>
                    <th className="px-4 py-2">Album</th>
                    <th className="px-4 py-2">Add to Favorites</th>
                </tr>
                </thead>
                <tbody className="text-white">
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <FontAwesomeIcon icon={faPlus} />
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Track Name 1</td>
                    <td className="px-4 py-2">3:45</td>
                    <td className="px-4 py-2">Artist 1</td>
                    <td className="px-4 py-2">Album 1</td>
                    <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}