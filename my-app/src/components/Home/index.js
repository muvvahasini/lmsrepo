import './index.css'
import {v4 as uuid} from 'uuid'
import Header from '../Header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const imagesList=[
    {
        imageUrl:"https://mvg-innovations.com/wp-content/uploads/2020/11/gettyimages-815099966-612x612-1.jpg",
        id:uuid(),
    },
    {
        imageUrl:"https://mvg-innovations.com/wp-content/uploads/2020/11/dm1.jpg",
        id:uuid(),
    },
    {
        imageUrl:"https://mvg-innovations.com/wp-content/uploads/2020/11/girli.jpg",
        id:uuid()
    }
]

const Home = () =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  }

  return (
    <>
    <Header/>
    <div className='main-container-home'>
        <div className='container'>
            <div className="slider-container">
                <Slider {...settings}>
                    {imagesList.map(eachItem=>(
                        <div key={eachItem.id}>
                            <img src={eachItem.imageUrl} className="carousel-image"  alt="carousel" />
                        </div>
                    ))}
            </Slider>
            </div>
        </div>
    </div>
    <div id="about">
        about section
    </div>
    <div id="contact">
        contact section
    </div>
    </>
  )
}

export default Home
