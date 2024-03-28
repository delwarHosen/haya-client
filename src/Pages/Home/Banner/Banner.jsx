import React from 'react';
import img1 from '../../../assets/banner/img1.png'
import img2 from '../../../assets/banner/img2.png'
// import img3 from '../../../assets/banner/img3.png'
// import img4 from '../../../assets/banner/img4.png'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';


const Banner = () => {
    return (
        <div className='flex mb-3'>
            <div className='w-2/6 my-16'>
                <h3 className='text-3xl text-[#116899]'>Up to 60% off</h3>
                <h2 className='text-4xl font-bold mt-3 w-[320px]'>Fashion <br />collection winter Sale</h2>
                <button className='w-[120px] h-[40px] rounded-lg mt-5 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
            </div>
            <div className=''>
                <img src={img1} alt="" />
                {/* <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                </Swiper> */}
            </div>
        </div>
    );
};

export default Banner;