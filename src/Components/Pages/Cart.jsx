import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../SectionTitle';
import CartItemsList from '../CartItemsList';
import CartTotals from '../CartTotals';
import { Link } from 'react-router-dom';
import { TabTitle } from '../FunctionTitles';

const Cart = () => {
    TabTitle("Comfy | Cart")
    const user = null;
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
    if (numItemsInCart === 0) {
        return <SectionTitle text='Your cart is empty' ></SectionTitle>;
    }

    return (
        <div className='container mx-auto mt-10 h-screen'>
            <SectionTitle text='Shopping Cart'></SectionTitle>
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList></CartItemsList>
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotals></CartTotals>
                    {user ? (
                        <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
                        Proceed to checkout
                        </Link>
                    ) : (
                        <Link to='/login' className='btn btn-primary btn-block mt-8'>
                        please login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;