import React from 'react';
import FormInput from '../FormInput';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const product = useLoaderData();
    // console.log(product);

    const handleUpdate = (event)=>{
        event.preventDefault();
        const form = event.target;
        const customer = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;

        product.customer = customer;
        product.phone = phone;
        console.log(product);

        fetch(`https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/orders/${product._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert(`${product.customer} updated successfully`)
            }
        })
    }

    return (
        <form onSubmit={handleUpdate} className='py-60 px-96 h-screen'>
            <h4 className='form-medium text-xl capitalize'>Update information</h4>
            <div className='grid gap-4 grid-cols-2'>
                <FormInput label='first name' name='firstName' type='text'></FormInput>
                <FormInput label='last name' name='lastName' type='text'></FormInput>
            </div>
            <FormInput label='phone' name='phone' type='number'></FormInput>
            <div className="mt-4">
                <button type='submit' className='btn btn-secondary me-5'>Update</button>
                <Link to='/orders'><button className='btn btn-secondary'>Back to Order Page</button></Link>
            </div>
        </form>
    );
};

export default Update;