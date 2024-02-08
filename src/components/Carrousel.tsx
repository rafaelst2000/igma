import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarrouselProps {
  settings: {
    [key: string]: string | number | boolean
  }
  slides: string[]
  responsive?: boolean
}

export default function Carrousel({ settings, slides, responsive = false }: CarrouselProps) {
  const baseSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    className: 'carrousel-container',
    cssEase: 'linear',
    autoplay: true,
    vertical: true,
    arrows: false,
    ...settings,
  }

  const responseSettings = {
    ...baseSettings,
    ...settings,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 445,
        settings: {
          slidesToShow: 2.32,
          slidesToScroll: 1,
        },
      },
    ]
  }
  const selectedSettings = responsive ? responseSettings : baseSettings 

  return (
    <Slider {...selectedSettings}>
      {slides.map((image) => (
        <div key={image} className='carrousel-item'>
          <Image quality={75} src={`/images/cellphones/${image}.png`} alt="cellphone image" width={193} height={406} />
        </div>
      ))}
    </Slider>
  )
}