import React from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { FaArrowRight } from "react-icons/fa";

const AllProduct = ({ product }) => {
    const { image, name, type, rating } = product
    return (
        <div>
            <div className="w-52 h-64 bg-base-100 shadow-xl rounded-lg ">
                <figure className="ml-8 items-center text-center">
                    <img src={image} alt="Shoes" className="h-[140px] w-32" />
                </figure>
                <div className="items-center text-center">
                    <h2 className="text-xl font-semibold text-center">{name}</h2>
                    <p className='text-black'>{type}</p>
                    <Rating className='mx-auto'
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <div className=''>
                        <button className="h-8 mt-3 rounded-b-lg bg-gradient-to-r from-[#005C62] to-[#00BCC8] text-white w-full">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;