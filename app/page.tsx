import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './_components/Hero'
import { PopularCities } from './_components/PopularCities'

const Home = () => {
  return (
    <div className='p-4 '>

      <Hero />
      <PopularCities />
    </div>
  )
}

export default Home