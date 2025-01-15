import React from 'react';
import imagehero from '../../assets/img/hero.jpg'

function Hero() {
  return (
    <div style={{backgroundImage:`url(${imagehero})`}} className='w-full h-[100vh] bg-cover bg-no-repeat relative flex justify-center items-center' >
      <div className="absolute backdrop-blur-sm top-2 px-3 lg:top-28 md:right-20 lg:backdrop-blur-0">
        <div className="">
            <h2 className='text-cream text-6xl my-10'>کافه خلیفه</h2>
        </div>
        <div className="">
            <p className='text-xl text-gray-200 my-10 leading-9'>فراتر از یک کافه. جایی برای استراحت. آرامش و تجربه های جدید
            <br />
            به کافه ما خوش آمدید !    
            </p>
        </div>
        <div className="">
            <button className='mx-2 bg-cream px-4 rounded-3xl font-bold text-gray-950 py-2 shadow-sm shadow-cream'>ثبت سفارش</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
