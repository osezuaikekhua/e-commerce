import React from 'react'
import Discounted from '../componets/Discounted'
import Explore from '../componets/Explore'
import Featured from '../componets/Featured'
import Highlights from '../componets/Highlights'
import Landing from '../componets/Landing'

function Home() {
  return (
   <>
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
   </>
  )
}

export default Home