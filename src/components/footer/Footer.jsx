import React from 'react';
import footerimg from '../../assets/img/fotter.png'

function Footer() {
  return (
    <div className='w-full flex justify-center items-center h-[400px]'>
      <div className='w-full h-full bg-[#915508]' style={{backgroundImage:`url(${footerimg})`, backgroundSize:`contain`}}>
        <div className="w-full h-full text-white items-center justify-between p-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="">
                <h1 className='text-2xl'>کافه خلیفه</h1>
                <p className='text-sm mt-2'>با هر جرعه, طعم زندگی را بچشید; قهوه ای با عطر بی نظیر و انرژی بخش, از اولین لحظه تا آخرین قطره, روزتان را با ما خاص کنید. قهوه ی ما همراه همیشگی لحظات خوش شمابا هر جرعه, طعم زندگی را بچشید; قهوه ای با عطر بی نظیر و انرژی بخش, از اولین لحظه تا آخرین قطره, روزتان را با ما خاص کنید. قهوه ی ما همراه همیشگی لحظات خوش شما</p>
            </div>
            <div className="">
                <h1 className='text-2xl'>درباره</h1>
                <ul className="flex flex-col gap-3 mt-2">
                    <a href="#">منو</a>
                    <a href="#">ویژگی ها</a>
                    <a href="#">بلاگ & خبر</a>
                    <a href="#">پشتیبانی & کمک</a>
                </ul>
            </div>
            <div className="">
                <h1 className='text-2xl'>درباره</h1>
                <ul className="flex flex-col gap-3 mt-2">
                    <a href="#">منو</a>
                    <a href="#">ویژگی ها</a>
                    <a href="#">بلاگ & خبر</a>
                    <a href="#">پشتیبانی & کمک</a>
                </ul>
            </div>
            <div className="">
                <h1 className='text-2xl'>درباره</h1>
                <ul className="flex flex-col gap-3 mt-2">
                    <a href="#">منو</a>
                    <a href="#">ویژگی ها</a>
                    <a href="#">بلاگ & خبر</a>
                    <a href="#">پشتیبانی & کمک</a>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
