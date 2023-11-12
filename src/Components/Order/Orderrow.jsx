import React from 'react';
import { Link } from 'react-router-dom';

const Orderrow = ({order, index, handleDelete, handleUpdate}) => {
    const {service, serviceName, customer, price, image, phone, amount, company, productColor} = order;

    return (
        <>
            <tr className='hover'>
                <th>{index + 1}</th>
                <td><img className='w-10 h-10 rounded-lg' src={image} alt="" /></td>
                <td>{customer}</td>
                <td>{serviceName}</td>
                <td>{price}</td>
                <td>{phone}</td>
                <td>
                    <button onClick={() => handleDelete(order._id)} className='btn btn-sm btn-warning me-3'>Delete</button>
                </td>
                
                <td>
                    <Link key={order._id} to = {`/orders/update/${order._id}`}><button className='btn btn-sm btn-info'>Update</button></Link>
                </td>
            </tr>
        </>
    );
};

export default Orderrow;