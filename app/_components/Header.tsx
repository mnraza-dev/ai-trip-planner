import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'

const Header = () => {


    const menuOptions = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Pricing', path: '/pricing' },
        { id: 3, name: 'Contact', path: '/contact' },
    ]
    return (
        <header className='sticky top-0 left-0 backdrop-blur-lg flex justify-between items-center p-4 border-b  bg-white/70 dark:bg-neutral-900/40
        backdrop-saturate-150 z-30 w-full supports-[backdrop-filter]:backdrop-blur-lg  drop-shadow-2xl supports-[backdrop-filter]:bg-white/60'>
            {/* Logo */}
            <div className=' '>
                <Image src='/images/logo.svg' alt='logo' width={200} height={40} className='inline mr-2' />

            </div>
            {/* Menu Options */}
            <div className='flex gap-4'>
                {menuOptions.map((option) => (
                    <Link key={option.id} href={option.path} className='hover:underline'>
                        {option.name}
                    </Link>
                ))}
            </div>
            {/* Get Started Button */}
            <div className=''>

                <SignInButton mode='modal'>
                    <Button variant={"default"} className=''>Get Started</Button>
                </SignInButton>
                

            </div>


        </header>
    )
}

export default Header