import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AllProduct from '../../Shared/AllProduct/AllProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'Haya Collection'}
                heading={'Our Product'}
                paragraph={'Nullam gravida, dolor ac ultrices lobortis, mi dolor justo'}
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-4 my-5 ml-7'>
                {
                    products.map(product => <AllProduct
                        key={product._id}
                        product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Products;