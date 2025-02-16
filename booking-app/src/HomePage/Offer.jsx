import React from 'react'
import './Offer.css'

function Offer() {
  return (
    <section>
        <div className='offer'>
            <h2>Offers</h2>
            <p>Promotions, deals and special offers for you</p>
            <div className='offer-card'>
                <div className='offer-Content'>
                 <h2>Save on stays worldwide</h2>
                 <p>Start your year with a sense of adventure, saving 15% or more with Early 2025 Deals.</p>
                 <div className='SaveBtn'>
                    <span>Save 15% or more</span>
                 </div>
                </div>
                <div className='offer-img'>
                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/420460173.jpeg?k=0654940492bab9993284109d6136f220e700bbb4d5a0a972c4b4de3bdc0d8204&o=" alt="" />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Offer