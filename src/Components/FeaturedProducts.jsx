import React from 'react';
import ProductsGrid from './ProductsGrid';
import Title from './Title';

const FeaturedProducts = ({products}) => {
    return (
        <div className='pt-24'>
            <Title text='featured products'></Title>
            <ProductsGrid products={products}></ProductsGrid>
        </div>
    );
};

export default FeaturedProducts;