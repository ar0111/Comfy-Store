import React from 'react';
import Hero from '../Hero/Hero';
import { useLoaderData } from 'react-router-dom';
import FeaturedProducts from '../FeaturedProducts';

const Landing = () => {
    const products = useLoaderData();
    // console.log(products);

    return <div className='container mx-auto'>
        <Hero></Hero>
        <FeaturedProducts products={products}></FeaturedProducts>
    </div>
};

export default Landing;