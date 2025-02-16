import {Outlet} from 'react-router-dom'
import React from 'react'

function RootPage() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default RootPage