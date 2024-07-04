import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="bg-white text-black shadow-sm">
            <nav className="pt-16 pl-16 flex space-x-2">
                {/* Add navigation items here */}
                <Image src='logo.svg' width={32} height={30} alt='logo' />
                <p className='font-black text-3xl'>FASHION</p>
            </nav>
        </header>
    )
}

export default Header