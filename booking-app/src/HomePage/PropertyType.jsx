import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PropertyType.css'
import PropertyCarousel from '../Components/Property-Carousel';
import { PropertyChollai } from './Rooms';

function PropertyType() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const product = PropertyChollai.map((item)=><PropertyCarousel
  image={item.img}
  name={item.name}
  />)

  return (
      <div className='Chollai'>
          <h1>Browse by property type in Choolai</h1>
          <Carousel responsive={responsive}>
            {product}
          </Carousel>
      </div>
    )

}

export default PropertyType