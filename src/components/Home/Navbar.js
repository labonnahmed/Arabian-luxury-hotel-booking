import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className=" z-10">
            <div className=" max-w-screen-xl flex flex-wrap items-center md:justify-around justify-between mx-auto p-4 max-md:mx-5">
                <a href='/' className="flex items-center">
                    <img src={logo} className="h-20" alt="burj-al-abar Logo" />
                </a>
                <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center rounded p-2 ml-3 text-sm text-gray-500 md:hidden border border-gray-500 bg-teal-800 hover:bg-[#c4992e] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6 text-teal-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`w-full z-10 md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="float-right rounded-md max-md:bg-teal-800 font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-12 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4  text-xl text-[#c4992e] hover:underline  md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/rooms" className="block py-2 pl-3 pr-4 text-white text-xl hover:text-[#c4992e] hover:underline md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Rooms</a>
                        </li>
                        <li>
                            <a href="/booking" className="block py-2 pl-3 pr-4 text-white text-xl hover:text-[#c4992e] hover:underline  md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Book</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-white text-xl hover:text-[#c4992e] hover:underline  md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                    </ul>
                </div>
                <Link to='/login' className='max-md:hidden'>
                    <button type="button" className="text-white hover:text-cyan-900 bg-primary hover:bg-[#e0b035] rounded-md focus:outline-none font-medium -lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                </Link>
            </div>
        </nav>

    );
};

export default Navbar;