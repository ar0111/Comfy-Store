import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { clearCart } from '/src/Feature/Cart/CartSlice.js';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = ()=>{
        navigate('/');
        dispatch(clearCart());
        logOut()
        .then(()=>{

        })
        .catch((error)=>{

        })
    }

    return (
        <div className='bg-neutral py-2 text-neutral-content'>
            <div className='align-element flex justify-center sm:justify-end container'>
                {
                    user?.uid? <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                        <p>Hello, {user.displayName}</p>
                        <button className='btn btn-xs btn-outline btn-primary' onClick={handleLogOut}
                    >Log Out</button>
                        </div>: <div className='flex gap-x-6 justify-center items-center'>
                        <Link to='/login' className='link link-hover text-xs sm:text-sm'>Login</Link>
                        <Link to='/register' className='link link-hover text-xs sm:text-sm'>Create an Account</Link>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Header;