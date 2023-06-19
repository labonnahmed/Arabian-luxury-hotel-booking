import React from 'react';
import RoomsData from './HomeData.json'
import RoomsCard from './RoomsCard';


const Rooms = () => {
    return (
        <section id='room' className='my-16 w-10/12 mx-auto'>
            <div className='mb-10'>
                <h3 className='text-center text-3xl font-semibold text-gray-700'>Our Accommodations</h3>
                <div className='h-1 bg-primary w-1/12 rounded mx-auto mt-2'></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center '>
                {
                    RoomsData.map(room => <RoomsCard room={room}></RoomsCard>)
                }
            </div>
        </section>
    );
};

export default Rooms;