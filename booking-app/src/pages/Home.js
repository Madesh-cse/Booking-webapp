import React from 'react'
import Navabar from '../HomePage/Navabar'
import IntrestCollection from '../HomePage/IntrestCollection'
import Offer from '../HomePage/Offer'
import Trending from '../HomePage/Trending'
import PropertyType from '../HomePage/PropertyType'

function Home() {
  return (
    <>
    <Navabar/>
    <main>
      <IntrestCollection/>
      <Offer/>
      <Trending/>
      <PropertyType/>
    </main>
    </>
  )
}

export default Home