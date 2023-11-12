import React from 'react';

const SectionTitle = ({text}) => {
    return (
        <div className='border-b border-base-300 pb-5 container mx-auto mt-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
        </div>
    );
};

export default SectionTitle;