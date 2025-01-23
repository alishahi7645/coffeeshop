import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import customers from '../../customerData';
import coffee_blast from "../../assets/img/coffee_blast.png";
import coffee_blast2 from "../../assets/img/coffee_blast-2.png";



const Customer = () => {
    return (
        <div className="relative my-20 p-5 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md">
            <div className="text-center my-8">
                <h4 className="text-4xl font-bold text-amber-900 mb-4">نظرات مشتریان در مورد ما</h4>
                <p className="text-gray-600 text-sm">
                    مشتریان ما همیشه از خدمات ما رضایت داشته‌اند. برخی از نظرات آن‌ها را در زیر مشاهده کنید.
                </p>
                <div>
                    <img src={coffee_blast2} className='absolute right-0 top-[-100px] w-[30vh] 
                    lg:w-[60vh] lg:right-[-100px] ' />
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                className="swiper-container"
            >
                {customers.map((customer) => (
                    <SwiperSlide key={customer.name}>
                        <div className="flex flex-col items-center text-center border border-amber-200
                         rounded-lg bg-white p-6 shadow-sm">
                            <p className="text-gray-700 italic">"{customer.review}"</p>
                            <img
                                className="w-24 h-24 rounded-full border-2 border-amber-400 my-10"
                                src={customer.img}
                                alt={customer.name}
                            />
                            <p className="text-amber-800 font-bold text-lg mt-4">{customer.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <img src={coffee_blast} className='absolute left-0 bottom-[-200px] w-[30vh] lg:w-[60vh]
                 lg:left-[-99px] ' />
            </div>
        </div>
    );
};

export default Customer;

