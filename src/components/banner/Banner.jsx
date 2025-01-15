import React from "react";
import coffeeimg from "../../assets/img/banner.png";
import coffeeblast from "../../assets/img/coffee_blast.png";

function Banner() {
  return (
    <div className="relative flex flex-col items-center md:flex-row">
      {/* content section */}
      <div className="text-center md:mr-16 md:text-right p-4 md:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-amber-950 mb-7">
          به دنبال بهترین قهوه باشید
        </h1>
        <p className="text-sm md:text-base lg:text-sm text-justify text-gray-700 mb-8">
          قهوه یکی از محبوب ترین نوشیدنی های جهان است که از دانه های گیاه قهوه
          تهیه می شود. این نوشیدنی با عطر و طعم بی نظیر خود, قرن هاست که بخش
          جدایی ناپذیری از زندگی روزمره مردم در سراسر جهان است. قهوه علاوه بر
          انرژی بخشی, سرشار از آنتی اکسیدان هاست که می تواند فوایدی برای سلامت
          قلب و مغز داشته باشد. روش های تهیه قهوه متنوع هستند; از اسپرسوی غلیظ و
          پر انرژی گرفته تا قهوه های دمی و قهوه ترک که هر کدام طعم و ویژگی منحصر
          به فردی دارند. این نوشیدنی نه تنها به عنوان راهی برای شروع روز, بلکه
          به عنوان یک فرصت برای لذت بردن و آرامش نیز شناخته می شود.
        </p>
        <button className="mx-2 bg-cream px-4 rounded-3xl font-bold text-gray-950 py-2 shadow-sm shadow-cream">
          ثیت سفارش
        </button>
      </div>
      {/* img section */}
      <div className="flex justify-center md:w-1/2">
        <img
          className="w-[60%] h-auto object-contain"
          src={coffeeimg}
          alt="banner"
        />
      </div>

      {/* blast section */}
      <div className="absolute bottom-[-50px] left-0 hidden md:block">
        <img src={coffeeblast} alt="" />
      </div>
    </div>
  );
}

export default Banner;
