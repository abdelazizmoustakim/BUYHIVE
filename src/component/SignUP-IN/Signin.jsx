import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import { CgCloseR } from "react-icons/cg";

const Signin = ({ onClose, isDarkMode }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center `}>
            <div className={`p-8 rounded-lg shadow-lg flex max-w-4xl w-11/12 relative  bg-white dark:bg-gray-800`}>
                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <CgCloseR className="text-2xl" />
                </button>

                {/* First column with flex-grow */}
                <div className="flex flex-col items-center flex-grow pr-4">
                    <SiGnuprivacyguard className="text-4xl hover:text-gray-300 transition-all duration-300 transform hover:scale-125" />
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl mt-2'>BuyHive</a>
                </div>

                {/* Second column with flex-grow */}
                <div className="border-l-2 pl-4 flex-none flex-grow">
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl mt-2'>Sign In</a>
                    <form className="mt-4 max-w-md">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" type="email" placeholder="Email" className={`mb-4 p-2 rounded w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} required />
                        
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" type="password" placeholder="Password" className={`mb-4 p-2 rounded w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} required />

                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                            Create Account
                        </button>
                    </form>
                    <div className="border-t border-gray-700 mt-16 pt-6 text-center" data-aos="fade-in" data-aos-delay="100">
                        <p>© {new Date().getFullYear()} BuyHive. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
