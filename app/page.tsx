import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='p-4 flex flex-col gap-4'>

      <Button variant="destructive">
        Custom Button
      </Button>
      <Button variant="outline">Button</Button>

    </div>
  )
}

export default Home