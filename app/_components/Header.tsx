import { Button } from '@/components/ui/button'
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
        <div className='flex justify-between items-center p-4 border-b bg-amber-100 z-30 w-full'>
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
                <Button variant={"default"} className=''>Get Started</Button>
            </div>
        </div>
    )
}

export default Header