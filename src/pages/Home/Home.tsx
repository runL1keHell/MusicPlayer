import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import { clearAlbums, getAlbums, selectMusic} from "../../redux/music/music.ts";
import {useNavigate} from "react-router";


export const Home: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const scrollHandler = () => {
    if (divRef.current) {
      const div = divRef.current;
      console.log('scrollHeight', div.scrollHeight);
      console.log('scrollTop', div.scrollTop);
      console.log('clientHeight', div.clientHeight);
    }
  };
  const music = useAppSelector(selectMusic);
  console.log(music);

  useEffect(() => {
    dispatch(getAlbums(0));
    return () => {
      dispatch(clearAlbums())
    }
  }, []);


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
        {music.albums.map((album) => {
          return <div
              key={album.id}
            className="flex flex-col items-center mb-[30px]"
            onClick={() => {
              navigate(`/album/${album.id}`)
            }}
          >
            {/*<img src="" alt=""/>*/}
            <div className="w-[320px] h-[340px] bg-black"></div>
            <h1 className="text-white text-[22px] font-bold">{album.name}</h1>
          </div>
        })}
      </div>

    </div>
  );
};