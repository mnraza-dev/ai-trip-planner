"use client"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
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
    const user = useUser();
    const router = useRouter();
    const onSend = () => {
        if (!user.isSignedIn) {
            router.push('/sign-in');
            return;
        }
        // Handle the send action here
    };

    return (
        <div className='flex justify-center items-center p-4'>
            {/* Content */}
            <div className='max-w-3xl w-full space-y-6  p-4 '>
                <h1 className='text-xl md:text-5xl text-center font-semibold leading-tight'>Hey {user.user?.firstName}, I'm Your Personal  <br /><span className='text-primary font-bold'>AI Trip Planner</span></h1>
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
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl mt-8 flex gap-2 text-center'>Not Sure Where to Start?  <span className='text-primary'><strong> See how it works </strong></span><ArrowDown className='text-primary h-12 w-8' /></h2>

                </div>
                {/* Video Section */}
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://youtu.be/0iDvK0zDFoo"
                    thumbnailSrc="https://i9.ytimg.com/vi_webp/0iDvK0zDFoo/maxresdefault.webp?v=63cbcab2&sqp=CJy678UG&rs=AOn4CLC_Grr_v2kFsK6NWkzUrVUk0QgDHQ"
                    thumbnailAlt="Dummy Video Thumbnail"
                />
            </div>
        </div>
    )
}

export default Hero