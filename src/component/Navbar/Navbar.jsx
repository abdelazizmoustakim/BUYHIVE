import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { PiCaretDownFill } from "react-icons/pi";
import { useSelector } from 'react-redux';
import Signup from '../../SignUP-IN/signup';
import Signin from '../../SignUP-IN/signin';
import DarkMode from './Darkmode';

const MenuLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Shop", link: "#shop" },
    { id: 3, name: "Why Us", link: "#Whyus" },
    { id: 4, name: "Sign Up", link: "/#" },
    { id: 5, name: "Sign In", link: "/#" }
];

const QuickLinks = [
    { id: 1, name: "Products", link: "/#contact" },
    { id: 2, name: "Best", link: "/#faq" },
    { id: 3, name: "Top", link: "/#support" },
];

const Navbar = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);

    const cartQuantity = useSelector((state) => state.cart.cartQuantity);

    const handleLinkClick = (link) => {
        if (link === "Sign Up") {
            setShowSignup(true);
        } else if (link === "Sign In") {
            setShowSignin(true);
        } else {
            const section = document.querySelector(link);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>BuyHive</a>
                        <div className='hidden lg:block'>
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map(data => (
                                    <li key={data.id}>
                                        <a
                                            href={`${data.link}`}
                                            onClick={() => handleLinkClick(data.name)}
                                            className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                <li className='relative cursor-pointer group'>
                                    <div className='flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <PiCaretDownFill className="group-hover:rotate-180 duration-300" />
                                    </div>
                                    <ul className="absolute hidden group-hover:block bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-lg rounded-md mt-2 py-2">
                                        {QuickLinks.map(link => (
                                            <li key={link.id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <a className='font-semibold' href={link.link}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input 
                                type="text" 
                                placeholder='Search' 
                                className='search-bar px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white'
                                aria-label="Search"
                            />
                            <IoMdSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200' />
                        </div>
                        <button className='relative p-3'>
                            <FaOpencart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                {cartQuantity}
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {showSignup && <Signup onClose={() => setShowSignup(false)} />}
            {showSignin && <Signin onClose={() => setShowSignin(false)} />}
        </div>
    );
};

export default Navbar;
