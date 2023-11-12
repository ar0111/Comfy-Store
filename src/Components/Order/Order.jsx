import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import Orderrow from './Orderrow';

const Order = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data))
    })

    // console.log(orders);

    const handleDelete = id =>{
        console.log({id});
        const proceed = window.confirm("Are you want delete to this order");
        if(proceed){
            fetch(`https://comfy-server-lweo6mwlf-arafat-rahmans-projects.vercel.app/orders/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete Successfully')
                    // dispatch(removeItem({ id }));
                }
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='md:container md:mx-auto h-screen p-10'>
            <h3 className='text-2xl mt-3 font-bold'>You have {orders.length} Order</h3>

            <div className="overflow-x-auto mt-10 border-2 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='hover text-lg font-semibold'>
                            <th>Serial No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Price</th> 
                            <th>Phone</th> 
                            <th>Delete</th> 
                            <th>Update</th> 
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <Orderrow
                                key={order.service}
                                order={order}
                                index = {index}
                                handleDelete = {handleDelete}
                            ></Orderrow>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Order;