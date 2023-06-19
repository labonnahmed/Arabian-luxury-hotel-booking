import React from 'react';
import RoomsData from '../Home/HomeData.json'
import RoomsCard from '../Home/RoomsCard';
import Navbar from '../Home/Navbar';

const Rooms = () => {
    return (
        <div className='bg-teal-800 min-h-screen'>
            <Navbar />
            <section id='room' className=' mt-16 w-10/12 mx-auto'>
                <div className='mb-10'>
                    <h3 className='text-center text-3xl font-semibold text-gray-300'>Our Accommodations</h3>
                    <div className='h-1 bg-primary w-1/12 rounded mx-auto mt-2'></div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center pb-10'>
                    {
                        RoomsData.map(room => <RoomsCard room={room}></RoomsCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Rooms;