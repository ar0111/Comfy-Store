import React from 'react';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';

const CheckoutForm = () => {
    return (
        <Form className='flex flex-col gap-y-4'>
            <h4 className='form-medium text-xl capitalize'>shipping information</h4>
            <FormInput label='first name' name='name' type='text'></FormInput>
            <FormInput label='address' name='address' type='address'></FormInput>
            <div className="mt-4">
                <button className='btn btn-secondary'>Place Your Order</button>
            </div>
        </Form>
    );
};

export default CheckoutForm;