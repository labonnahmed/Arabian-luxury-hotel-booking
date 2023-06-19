import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom';


const Book = () => {
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.checkIn = date;
        setSelectedDate(newDate)
    };


    const handleCheckOutDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.checkOut = date;
        setSelectedDate(newDate);
    };


    const handleBooking = (e) => {
        e.preventDefault();

        const bookingInfo = {
            room: e.target[2].value,
            guest: e.target[3].value,
            checkInDate: selectedDate.checkIn,
            checkOutdate: selectedDate.checkOut
        }



        window.location.reload();
    }


    const handleForm = (e) => {
        // console.log(e.target.name)
    }

    return (
        <div className='header-container min-h-screen relative'>
            <Navbar />
            <div className='grid md:grid-cols-2 gap-4 absolute top-36'>
                <div className='text-gray-200 w-10/12 mx-auto my-auto p-4'>
                    <h1 className='text-6xl mb-4 font-serif leading-tight'>Make Your Reservation</h1>
                    <p className='text-lg font-sans '>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                </div>
                <form action="" onSubmit={handleBooking} className='bg-gray-200 p-4 rounded md:w-fit my-10 w-10/12 mx-auto'>
                    <h3 className='text-center text-2xl my-4 font-serif text-gray-700'>Booking Your Hotel</h3>
                    <div className="md:flex items-center gap-2">
                        <DatePicker selected={selectedDate.checkIn} onChange={handleCheckInDate} dateFormat="MMMM d, yyyy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start date" required />
                        <DatePicker selected={selectedDate.checkOut} onChange={handleCheckOutDate} dateFormat="MMMM d, yyyy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start date" required />
                    </div>
                    <div className='md:flex items-center gap-2 my-2'>
                        <select name="guest" onChange={handleForm} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option disabled selected className='text-gray-500'>Guests</option>
                            <option>2 Adults</option>
                            <option>single</option>
                            <option>2 Adults 1 child</option>
                            <option>2 Adults 2 child</option>
                        </select>
                        <select name="room" className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option disabled selected>Room</option>
                            <option>1 Room</option>
                            <option>2 Room</option>
                            <option>3 Room</option>
                        </select>
                    </div>
                    <Link to='/payment'>
                        <button type="submit" className="hover:text-cyan-900 border border-primary text-gray-700 rounded-md focus:outline-none font-medium -lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Check Availability</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Book;