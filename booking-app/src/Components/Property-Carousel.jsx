import React from 'react'
import './PropertyCarousel.css'
import { Link } from 'react-router-dom'

function PropertyCarousel(product) {
  return (
    <div className='Choolai'>
        <Link>
           <div className="Chollai-Card">
              <img src={product.image} alt="" />
              <p>{product.name}</p>
           </div>
        </Link>
    </div>
  )
}

export default PropertyCarousel