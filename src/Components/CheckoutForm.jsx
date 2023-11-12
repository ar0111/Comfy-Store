import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput';
import { AuthContext } from './Context/UserContext';
import { useSelector } from 'react-redux';

const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
};

const CheckoutForm = () => {

    const {user} = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cartState.cartItems);

    // console.log(cartItems);

    const handlePlaceOrder = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message);
        // console.log('functionworking');

        {
            cartItems.map((item)=>{
                const {productID, title, price, image, amount, company, productColor} = item;
                console.log(productID);
                const order = {
                    service: productID,
                    serviceName: title,
                    price: formatPrice(price),
                    customer: name,
                    email,
                    phone,
                    message,
                    image,
                    amount,
                    company, 
                    productColor
                }
                console.log(JSON.stringify(order));
                fetch('https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/orders', {
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(order)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.acknowledged){
                        alert('Order Place Successfully')
                    }
                    form.reset();
                })
                .catch((err=> console.log(err)))
            })
        }

        
        
    }
    
    return (
        <form onSubmit={handlePlaceOrder} className='flex flex-col gap-y-4'>
            <h4 className='form-medium text-xl capitalize'>shipping information</h4>
            <div className='grid gap-4 grid-cols-2'>
                <FormInput label='first name' name='firstName' type='text'></FormInput>
                <FormInput label='last name' name='lastName' type='text'></FormInput>
            </div>
            <FormInput label='email address' name='email' type='email' defaultvalue={user?.email}></FormInput>
            <FormInput label='phone' name='phone' type='number'></FormInput>
            <textarea className = "border rounded-md p-3 mt-3" name="message" id="" cols="10" rows="7" required placeholder='type your message here'></textarea>
            <FormInput label='address' name='address' type='address'></FormInput>
            <div className="mt-4">
                <button type='submit' className='btn btn-secondary'>Place Your Order</button>
            </div>
        </form>
    );
};

export default CheckoutForm;