import React from 'react';
import Filter from '../Filter';
import ProductContainer from '../ProductContainer';
import Pagination from '../Pagination';
import { useLoaderData } from 'react-router-dom';
import { TabTitle } from '../FunctionTitles';

const Products = () => {
    TabTitle("Comfy | Products")
    const products = useLoaderData();
    // console.log(products);

    return <div className='container mx-auto mt-10'>
        <Filter products={products}></Filter>
        <ProductContainer products={products}></ProductContainer>
        <Pagination products={products}></Pagination>
    </div>
};

export default Products;