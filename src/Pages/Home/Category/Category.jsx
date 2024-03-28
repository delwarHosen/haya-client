import React from 'react';
import manImg from '../../../assets/category/man.png'
import womanImg from '../../../assets/category/women.png'
import kidsImg from '../../../assets/category/kids.png'
import shoeImg from '../../../assets/category/shoes.png'

const Category = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 mx-auto gap-y-6 gap-x-20'>
                <div className='w-[450px] h-[150px] bg-gradient-to-r rounded-xl from-[#F644A0] to-[#AB3E6F]'>
                    <div className='relative'>
                        <button className='w-[170px] h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] text-xl font-semibold'>Man</button>
                        <img className='ml-72 h-[150px]' src={manImg} alt="" />
                    </div>
                </div>
                <div className='w-[350px] bg-gradient-to-r rounded-xl from-[#03756E] to-[#20D8CD]'>
                    <div className='relative'>
                        <button className='w-[170px] h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] text-xl font-semibold'>Woman</button>
                        <img className='ml-56 h-[150px]' src={womanImg} alt="" />
                    </div>
                </div>
                <div className='w-[350px] bg-gradient-to-r rounded-xl from-[#03756E] to-[#20D8CD]'>
                    <div className='relative'>
                        <button className='w-[170px] h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] text-xl font-semibold'>Kids</button>
                        <img className='ml-56 h-[150px]' src={kidsImg} alt="" />
                    </div>
                </div>
                <div className='w-[450px] h-[150px] -ml-24 bg-gradient-to-r rounded-xl from-[#F644A0] to-[#AB3E6F]'>
                    <div className='relative'>
                        <button className='w-[170px] h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] text-xl font-semibold'>Shoes</button>
                        <img className='ml-72 h-[150px]' src={shoeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;