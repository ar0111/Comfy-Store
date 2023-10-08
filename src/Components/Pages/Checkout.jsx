import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../SectionTitle';
import CheckoutForm from '../CheckoutForm';
import CartTotals from '../CartTotals';
import { AuthContext } from '../Context/UserContext';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
    TabTitle("Comfy | Checkout")
    const {user} = useContext(AuthContext);
    if(!user){
        toast.warn("You must be logged in to checkout");
        return redirect('/login');
    }
    const cartTotal = useSelector((state) => state.cartState.cartTotal);
    if (cartTotal === 0) {
        return <SectionTitle text='Your cart is empty'></SectionTitle>;
    }
    return (
        <div className='container mx-auto mt-10'>
            <SectionTitle text='place your order'></SectionTitle>
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutForm></CheckoutForm>
                <CartTotals></CartTotals>
            </div>
        </div>
    );
};

export default Checkout;