import React from 'react';

const Title = ({text}) => {
    return (
        <div className='border-b border-base-300 pb-5 container mx-auto mt-10'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
        </div>
    );
};

export default Title;