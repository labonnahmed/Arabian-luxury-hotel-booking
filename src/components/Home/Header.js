import React from 'react';
import './Home.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header-container min-h-screen relative'>
            <Navbar />
            <div className='text-gray-200 absolute top-1/3 m-auto w-full tracking-widest'>
                <h1 className='text-5xl text-center leading-loose font-extrabold'>Burj-Al-Arab</h1>
                <p className='text-2xl text-center font-semibold mt-10'>A global icon of Arabian luxury</p>
            </div>
        </div>
    );
};

export default Header;