import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon
import { useSelector } from 'react-redux';
import DarkMode from './Darkmode';

const MenuLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Why Us", link: "/Whyus" },
];

const Navbar = () => {
    const cartQuantity = useSelector((state) => state.cart.cartQuantity);
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu on mobile

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>

                    {/* Hamburger Menu for Mobile */}
                    <div className='flex items-center gap-4'>
                        <button className='lg:hidden' onClick={toggleMenu}>
                            <GiHamburgerMenu className='text-2xl dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300' />
                        </button>
                    </div>

                    {/* Logo */}
                    <a 
                        href="/" 
                        className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl 
                                   lg:mx-0 lg:ml-0 text-center'>
                        BUYHIVE
                    </a>

                    {/* Menu Links - Centered Between Logo and Search/Cart */}
                    <div className='hidden lg:flex flex-grow justify-center'>
                        <ul className="flex items-center gap-8">
                            {MenuLinks.map(data => (
                                <li key={data.id}>
                                    <a
                                        href={data.link}
                                        className='block px-4 py-2 
                                            text-gray-800 dark:text-gray-300 
                                            hover:text-gray-900 dark:hover:text-white 
                                            font-medium text-lg transition-all 
                                            duration-300 rounded-md '
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section (Search, Cart, Dark Mode) */}
                    <div className='flex items-center gap-4'>
                        {/* Search bar - Hidden on Mobile */}
                        <div className='relative group hidden sm:block'>
                            <input 
                                type="text" 
                                placeholder='Search' 
                                className='search-bar px-4 py-2 rounded-md border border-gray-300 
                                           focus:outline-none focus:ring focus:ring-blue-400 
                                           dark:bg-gray-800 dark:border-gray-600 
                                           dark:text-white transition-all duration-300 
                                           hover:border-gray-500 dark:hover:border-gray-400'
                                aria-label="Search"
                            />
                            <IoMdSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200' />
                        </div>

                        {/* Cart Icon */}
                        <a href="/Card" className='relative p-3 transition-transform duration-300 hover:scale-105'>
                            <FaOpencart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                {cartQuantity}
                            </div>
                        </a>

                        {/* Dark Mode Toggle */}
                        <DarkMode />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Links - Slide in from the left */}
            <div className={`fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 z-30 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-start mt-8 h-full p-8">
                    <ul className="flex flex-col items-start gap-6">
                        {MenuLinks.map(data => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className='block px-4 py-2 
                                        text-gray-800 dark:text-gray-300 
                                        hover:text-gray-900 dark:hover:text-white 
                                        font-medium text-lg transition-all 
                                        duration-300 rounded-md'
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Overlay for mobile when menu is open */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20" 
                    onClick={toggleMenu} 
                />
            )}
        </div>
    );
};

export default Navbar;
