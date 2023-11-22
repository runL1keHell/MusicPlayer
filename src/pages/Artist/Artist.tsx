import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import {getArtistById, selectArtist} from "../../redux/music/music.ts";

export const Artist = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {artistId} = useParams();
    const numericArtistId = Number(artistId);

    useEffect(() => {
        dispatch(getArtistById(numericArtistId));
    },[numericArtistId]);

    const artist = useAppSelector(selectArtist);

    if (artist) {
        return (
            <section className="flex flex-col mx-[20px]">
                <h1 className="text-5xl text-white flex justify-center">{artist.name}</h1>
                <div className="flex flex-wrap justify-evenly mt-[50px]">
                    {artist.albums &&
                        artist.albums.map((album) => {
                            return(
                                <div
                                    key={album.id}
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() => navigate(`/album/${album.id}`)}
                                >
                                    <img src={album.imageUrl} className="w-[190px] h-[200px] bg-white" alt=""/>
                                    <span className="text-[20px] text-[#76CCFB]">{album.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }

}