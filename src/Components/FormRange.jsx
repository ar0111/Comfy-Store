import React, { useState } from 'react';

const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
  };

const FormRange = ({label, name, size}) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(maxPrice);

    return (
        <div className='form-control'>
            <label htmlFor={name} className='label cursor-pointer'>
                <span className='label-text capitalize'>{label}</span>
                <span>{formatPrice(selectedPrice)}</span>
            </label>
            <input type="range" name={name} min={0} max={maxPrice} value={selectedPrice} onChange={(e)=> setSelectedPrice(e.target.value)} className={`range range-primary ${size}`} step={step} />

            <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span className='font-bold text-md'>0</span>
                <span className='font-bold text-md'>Max: {formatPrice(maxPrice)}</span>
            </div>
        </div>
    );
};

export default FormRange;