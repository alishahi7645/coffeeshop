import React from "react";
import img1 from "../../assets/img/coffee_bean.png";
import img2 from "../../assets/img/cup.png";
import img3 from "../../assets/img/Rectangle14.png";
import img4 from "../../assets/img/Rectangle.png";

function Coffeebanner() {
  return (
    <div
      style={{ backgroundImage: `url(${img3})` }}
      className="relative w-full mb-4 h-[300px] sm:h-[600px] lg:h-[400px] text-white flex justify-center items-center"
    >
        <img src={img4} className="w-full h-full" alt="" />
      <div className="absolute left-20 top-1/2 text-center transform -translate-y-1/2 sm:w-[70%] md:w-[50%] lg:w-[40%] p-4 sm:text-right">
        <h4 className="text-xl sm:text-3xl text-white font-bold mb-4">
          صبح را شگفت انگیز شروع کنید
        </h4>
        <p className="text-sm sm:text-base text-gray-200 mb-6">
          با هر جرعه, طعم زندگی را بچشید; قهوه ای با عطر بی نظیر و انرژی بخش, از
          اولین لحظه تا آخرین قطره, روزتان را با ما خاص کنید. قهوه ی ما همراه
          همیشگی لحظات خوش شما
        </p>
        <button className="mx-2 bg-cream px-4 rounded-3xl font-bold text-gray-950 py-2 shadow-sm shadow-cream">
          ثبت سفارش
        </button>
      </div>

      <img
        src={img1}
        className="absolute right-0 bottom-0 hidden sm:block w-[60vh] h-[68vh]"
        alt=""
      />
      <img
        src={img2}
        className="absolute right-[120px] bottom-0 hidden sm:block w-[50vh] h-[60vh]"
        alt=""
      />
    </div>
  );
}

export default Coffeebanner;
