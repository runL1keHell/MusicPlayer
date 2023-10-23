import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";

// Sample image data
const images = [
  'https://via.placeholder.com/400x200?text=Image+1',
  'https://via.placeholder.com/400x200?text=Image+2',
  'https://via.placeholder.com/400x200?text=Image+3',
  'https://via.placeholder.com/400x200?text=Image+4',
];

export const Home: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='h-[calc(100vh-171px)] overflow-y-auto'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='w-[402px] h-[255px] ml-[42px]'>
            <img src={image} className='w-full h-full' alt="Playlist Image" />
          </div>
        ))}
      </Slider>

      <div className="w-[100%] h-[70px] mt-[20px] flex justify-around text-white shadow-md shadow-inset">
        <button className="w-1/5 border-r-[1px] border-[#00000033]">All</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Genres</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Most Played</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">New Releases</button>
        <button className="w-1/5 border-r-[1px] border-[#00000033]">Featured</button>
      </div>
      <div className="mt-[50px]">

        <Slider {...settings}>
          {images.map((image, index) => (
              <div key={index} className='ml-[20px] h-[100px]'>
                <img src={image} alt="Playlist Image" />
              </div>
          ))}
        </Slider>

      </div>

      <div className="flex flex-wrap mt-[50px] ml-[15px]">
        <div className="w-[100px] h-[100px] bg-black"></div>
      </div>
    </div>
  );
};