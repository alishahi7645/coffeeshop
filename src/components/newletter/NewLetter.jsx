import React from 'react';
import banner from "../../assets/img/news-banner.png";
import wing1 from "../../assets/img/wing1.png";
import wing2 from "../../assets/img/wing2.png";


const NewsLetter = () => {
    return (
        <div
            className='  mt-20 sm:mt-40 lg:mt-60 relative w-full h-[300px] 
                text-white flex justify-center items-center 
                '
            alt="بنر قهوه"
            style={{ backgroundImage: `url(${banner})` }} >
            <div className='text-center px-4 sm:px-10' >

                <h3 className='text-xl sm:text-2xl lg:text-3xl text-white my-4' >ما را دنبال کنید تا به آخرین اخبار دسترسی داشته باشید</h3>
                <p className='text-gray-300 text-sm my-2' >آخرین اخبار، بروزرسانی ها و پیشنهاد های ویژه را از دست ندهید.</p>
                <div className='flex flex-col sm:flex-row my-2 justify-center items-center '  >
                    <input placeholder='ایمیل خود را وارد کنید...'
                        type='email'
                        className='w-full sm:w-[60%] lg:w-[70%] h-[58px] rounded-sm px-4 my-4' />

                    <button className=' mx-2 bg-cream px-4 py-4 rounded-sm text-gray-950  shadow-sm shadow-cream border-none' >
                        ثبت سفارش
                    </button>
                </div>
            </div>

            <img src={wing1}
                alt='فنجون قهوه'
                className='absolute bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-70px]
            left-0 w-[120px] sm:w-[200px] lg:w-[250px]'
            />

            <img src={wing2}
                alt='فنجون قهوه'
                className='absolute bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-70px]
            right-0 w-[120px] sm:w-[200px] lg:w-[250px]'
            />



        </div>
    );
}

export default NewsLetter;
