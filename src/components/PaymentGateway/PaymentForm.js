import React from 'react';
import Navbar from '../Home/Navbar';

const PaymentForm = () => {
    const handlePayment = (e) => {
        const donateInfo = {
            currency: "usd",
            amount: e.target[2].value * 100,
            automatic_payment_methods: { enabled: true }
        }
        sessionStorage.setItem('donateInfo', JSON.stringify(donateInfo));

        window.location.reload();

        e.preventDefault();
    };


    return (
        <div className='header-container min-h-screen relative'>
            <Navbar />
            <div className='grid md:grid-cols-2 gap-4 absolute top-36'>
                <div className='text-gray-200 w-10/12 mx-auto my-auto p-4'>
                    <h1 className='text-6xl mb-4 font-serif leading-tight'>Make Your Reservation</h1>
                    <p className='text-lg font-sans '>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                </div>
                <form action="" onSubmit={handlePayment} className='bg-gray-200 p-4 rounded space-y-2 my-10 w-10/12 mx-auto'>
                    <h3 className='text-center text-2xl my-4 font-serif text-gray-700'>Your Details Here</h3>
                    <input className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="donar-name" type="text" placeholder="Your Name" required />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="donar-email" type="email" placeholder="Your Email" required />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="donate-amount" type="number" placeholder="Price" required />
                    <button type="submit" className="hover:text-cyan-900 border border-primary text-gray-700 rounded-md focus:outline-none font-medium -lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Check Availability</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;