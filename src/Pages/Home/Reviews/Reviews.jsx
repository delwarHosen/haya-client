import React, { useEffect, useState } from 'react';
// import '../Reviews.css'
import bgImg from '../../../assets/reviews/review.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import './Reviews.css'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="reviewBg bg-fixed pt-28">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <div className=''>
                    {
                        reviews.map(review => <SwiperSlide className='px-16' key={review._id}>
                            <h3 className='text-4xl font-bold text-white text-center'>Customers Reviews</h3>
                            <Rating className='mx-auto'
                                style={{ maxWidth: 100 }}
                                value={review.rating}
                                readOnly
                            />
                            
                            <p className='text-white'>{review.details}</p>
                            <div className='flex justify-center mt-4'>
                                <img className='h-14 rounded-full' src={review.image} alt="" />
                                <div className='ml-3 text-white'>
                                    <p className='text-lg font-semibold'>{review.name}</p>
                                    <p>{review.designation}</p>
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </div>
            </Swiper>


        </div>
    );
};

export default Reviews;