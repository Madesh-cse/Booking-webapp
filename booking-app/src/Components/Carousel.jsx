
import './Carousel.css'
import React from 'react'
import { IoBedOutline } from "react-icons/io5";

function InrestedCarousel(product) {
  return (
    <>
    <div className="Carousel">
        <div className="Carousel-Card">
            <img src={product.image} alt="" />
            <div className='Card-Description'>
                <h3>{product.name}</h3>
                <p>{product.city}</p>
            </div>
            <div className='Rating'>
                <span>{product.rating}</span>
                <p>Fabulous {`${product.review} reviews`}</p>
            </div>
            <hr/>
            <div className='Options'>
              <span><IoBedOutline/></span>
              <p>View similar properties</p>
            </div>
        </div>
    </div>
   
    </>
    
   
  )
}

export default InrestedCarousel