import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, Globe2Icon, Landmark, Plane, PlaneTakeoffIcon, Send, Share2Icon, } from 'lucide-react'
import React from 'react'
const suggestions = [
    {
        id: 1,
        title: "Create New Trip",
        icon: <Globe2 className='text-blue-500 h-5 w-5 hover:text-white' />,
    },
    {
        id: 2,
        title: "Inspire Me Where to Go",
        icon: <Plane className='text-green-500 h-5 w-5 hover:text-white' />,
    },
    {
        id: 3,
        title: "Discover Hidden Gems",
        icon: <Landmark className='text-purple-500 h-5 w-5 hover:text-white' />,
    },
    {
        id: 4,
        title: "Adventure Destinations",
        icon: <Globe2 className='text-red-500 h-5 w-5 hover:text-white' />,
    }
]
const Hero = () => {

    return (
        <div className='flex justify-center items-center p-4'>
            {/* Content */}
            <div className='max-w-3xl w-full space-y-6  p-4 '>
                <h1 className='text-xl md:text-5xl text-center font-bold'>Hey, I'm Your <span className='text-primary'>Personal Trip Planner</span></h1>
                <p className='text-lg'>Plan your perfect trip with the power of AI. Get personalized itineraries, travel tips, and more!</p>
                {/* Input Box */}
                <div className='flex flex-col border-2 border-amber-300 rounded-2xl p-4 '>
                    <Textarea placeholder='Create a Trip from Paris to India' className='border p-2 rounded-lg w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none  resize-none' />
                    <Button size={'icon'} variant={"default"} className='rounded-full self-end '>
                        <Send className=' h-4 w-4' />
                    </Button>
                </div>

                {/* Suggestion List */}
                <div className='flex gap-4 flex-wrap'>
                    {suggestions.map((suggestion) => (
                        <div key={suggestion.id}
                            className='
                        flex items-center gap-2 rounded-full  border-amber-100 border-2 cursor-pointer p-2 hover:bg-primary hover:shadow-md transition ease-in-out duration-300 hover:text-white'>
                            {suggestion.icon}
                            <h2 className='font-semibold text-sm'>{suggestion.title}</h2>
                        </div>
                    ))}
                </div>
                {/* Video Section */}
            </div>

        </div>
    )
}

export default Hero