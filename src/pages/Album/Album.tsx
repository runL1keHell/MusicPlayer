import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {getTracksByAlbum, selectAlbum, Track} from "../../redux/music/music.ts";
import {useNavigate, useParams} from "react-router";

export const Album = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {albumId} = useParams();
    const numericAlbumId:number = Number(albumId);

    useEffect(() => {
        dispatch(getTracksByAlbum(numericAlbumId))
    },[numericAlbumId]);

    const album = useAppSelector(selectAlbum);
    const songWithImage = album && album.find((song) => {
        return song.imageUrl !== null});
    const imageUrl = songWithImage && songWithImage.imageUrl;

    if (album) {
        return (
            <section className="h-[calc(100vh-171px)] overflow-y-auto pl-[30px]">
                <div className="flex">
                    <div className={`
                    bg-[url(${imageUrl})]
                    w-[347px] h-[263px] relative rounded-[24px] bg-cover`}>
                        <img src={imageUrl} alt=""/>
                    <span
                        className="uppercase absolute bottom-0 text-[#76CCFB] text-[30px] pr-[10px] cursor-pointer"
                        onClick={() => {
                            navigate(`/artist/${album[0].artistId}`)
                        }}
                    >
                        {album[0].artistName}
                    </span>
                    </div>
                    <div className="text-[#76CCFB] ml-[50px]">
                        <h1 className="text-[48px] font-bold">{album[0].albumName}</h1>
                        <span className="text-[24px]">{album.length} songs</span>
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

                    {album &&
                        album.map((song: Track, i:number) => {
                            return (
                                <tr
                                    className="w-fit cursor-pointer hover:text-blue-400"
                                    key={song.id}
                                >
                                    <td className="px-4 py-2">{i+1}</td>
                                    <td className="px-4 py-2">{song.name}</td>
                                    <td className="px-4 py-2">3:45</td>
                                    <td className="px-4 py-2">{song.artistName}</td>
                                    <td className="px-4 py-2">{song.albumName}</td>
                                    <td className="px-4 py-2">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>)
    }
}