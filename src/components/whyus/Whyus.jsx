import React from 'react';
import whyimg1 from '../../assets/img/why-1.png'
import whyimg2 from '../../assets/img/why-2.png'
import whyimg3 from '../../assets/img/why-3.png'
import whyimg4 from '../../assets/img/why-4.png'
import coffeeblast from '../../assets/img/coffee_blast-2.png'

function Whyus() {
  return (
    <div className='relative'>
      <div className="">
        <img src={coffeeblast} alt="" className='absolute top-[-100px] w-[30vh] lg:w-[50vh]'/>
      </div>

      <div className="my-20 p-5 max-w-6xl mx-auto">
        <div className="text-center p-4">
            <h1 className='text-4xl text-amber-950'>چرا کافه خلیفه ؟</h1>
            <p className='text-gray-600 text-sm'>با کافه خلیفه روزت رو بساز</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500">
                <img src={whyimg1} alt="" />
                <h4 className='text-2xl text-amber-900 my-2'>قهوه های سلطنتی</h4>
                <p className='text-gray-700 text-sm my-4'>با دانه های طلاییی</p>
            </div>
            <div className="bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500">
                <img src={whyimg2} alt="" />
                <h4 className='text-2xl text-amber-900 my-2'>کیفیت عالی</h4>
                <p className='text-gray-700 text-sm my-4'>م بهترین کیفیت را فراهم میکنیم</p>
            </div>
            <div className="bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500">
                <img src={whyimg3} alt="" />
                <h4 className='text-2xl text-amber-900 my-2'>فوق العاده</h4>
                <p className='text-gray-700 text-sm my-4'>فهوه ای شگفت انگیز تجربه کنید</p>
            </div>
            <div className="bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500">
                <img src={whyimg4} alt="" />
                <h4 className='text-2xl text-amber-900 my-2'>قیمت مناسب</h4>
                <p className='text-gray-700 text-sm my-4'>بهترین قهوه با کمترین قیمت</p>
            </div>
        </div>
        <div className="text-center p-4 my-8">
            <h4 className='text-gray-700 text-sm my-2'>بهترین ایده ها با بهترین قهوه ها شروع می شوند</h4>
            <p className='text-3xl text-amber-900'>از امروز شروع کن</p>
            <button className='mx-2 bg-cream px-4 my-8 rounded-3xl font-bold text-gray-950 py-2 shadow-sm shadow-cream'>به ما بپیوندید</button>
        </div>
      </div>
    </div>
  )
}

export default Whyus
