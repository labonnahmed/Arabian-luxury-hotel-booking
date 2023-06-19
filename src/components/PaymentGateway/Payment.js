import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './CheckOutForm';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const [stripePromise, setStripePromise] = useState("");
    const [clientSecret, setClientSecret] = useState(null);
    const donateInfo = JSON.parse(sessionStorage.getItem('donateInfo')) || null;

    useEffect(() => {
        // fetch('http://localhost:8000/config')
        //     .then(res => res.json())
        //     .then(data => setStripePromise(loadStripe(data.publishableKey)))
    }, []);


    useEffect(() => {
        // fetch('http://localhost:8000/create-payment-intent', {
        //     method: 'POST',
        //     body: JSON.stringify(donateInfo),
        //     headers: {
        //         'content-type': 'application/json; charset=UTF-8'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => setClientSecret(data.clientSecret))
    }, []);


    return (
        <div className='grid md:grid-cols-2 h-screen w-screen bg-slate-100'>
            <div className='order-1 mt-16 ml-16'>
                {stripePromise && clientSecret ?
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        {/* <CheckOutForm /> */}
                    </Elements> :
                    <PaymentForm />
                }
            </div>
        </div>
    );
};

export default Payment;