import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import { AlbumByGetAlbums, getAlbums, selectAlbums} from "../../redux/music/music.ts";
import {useNavigate} from "react-router";


export const Home: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(true);

  const divRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const scrollHandler = () => {
    const div: HTMLDivElement | null = divRef.current;
    if (div) {
      if (div.scrollHeight - (div.scrollTop + div.offsetHeight) < 100 && offset < 12) {
        setFetching((prev) => !prev);
      }
    }
  };
  const albums = useAppSelector(selectAlbums);

  useEffect(() => {
    console.log(fetching);
    if (fetching) {
      dispatch(getAlbums(offset));
      setOffset((prev) => prev + 3);
    }
  }, [fetching]);

  return (
    <div
        className='h-[calc(100vh-171px)] overflow-y-auto'
        ref={divRef}
        onScroll={scrollHandler}
    >

      <div className="w-[100%] h-[70px] mt-[20px] flex justify-around text-white shadow-md shadow-inset">
        <button className="w-1/5 border-r-[1px] border-[#00000033]">All</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Genres</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Most Played</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">New Releases</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Featured</button>
      </div>

      <div className="flex flex-col items-center mt-[50px] ml-[15px]">
        {
          albums.map((album: AlbumByGetAlbums) => {
          return (
              <div
                key={album.id}
                className="flex flex-col items-center mb-[30px] cursor-pointer"
                onClick={() => {
                  navigate(`/album/${album.id}`)
                }}
              >
                <img className="w-[320px] h-[340px]" src={album.imageUrl}/>
                {/*<div className="w-[320px] h-[340px] bg-black"></div>*/}
                <h1 className="text-white text-[22px] font-bold">{album.name}</h1>
            </div>
          )})
        }
      </div>
    </div>
  )
};