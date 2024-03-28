import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Products from '../Products/Products';
import HotProduct from '../../Shared/AllProduct/HotProduct/HotProduct';
import Reviews from '../Reviews/Reviews';
import LatestBlogProduct from '../LatestBlogProduct/LatestBlogProduct';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <Banner></Banner>
                <Category></Category>
                <Products></Products>
                <HotProduct></HotProduct>
                <Reviews></Reviews>
                <LatestBlogProduct></LatestBlogProduct>
            </div>
        </div>
    );
};

export default Home;