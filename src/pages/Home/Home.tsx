import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className='w-[97%]'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='w-[402px] h-[255px] ml-[42px]'>
            <img src={image} className='w-full h-full' />
          </div>
        ))}
      </Slider>
    </div>
  );
};