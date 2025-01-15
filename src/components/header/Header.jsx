import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import logomenu from "../../assets/img/why-2.png";
import { IoMdClose } from "react-icons/io";


function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggle = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <header className="absolute top-0 left-0 w-full text-white z-10">
      <nav className="px-10 py-5">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex ">
            <h1>کافه خلیفه</h1>
          </div>

          <div className="lg:hidden">
            <button onClick={toggle} className="lg:hidden">
              <IoMdMenu className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:flex gap-8">
            <ul className="flex gap-8">
              <li>خانه</li>
              <li>منو</li>
              <li>درباره ما</li>
              <li>ارتباط با ما</li>
            </ul>
          </div>

          <div className="flex">
            <button className="mx-2 hidden bg-cream px-4 py-2 rounded-3xl text-gray-950 lg:block">
              ثبت نام
            </button>
            <button className="hidden mx-2 lg:block">ورود</button>
          </div>
        </div>
      </nav>

      {/* منوی موبایل */}
      <div
        className={`fixed rela w-48 top-0 right-0 h-screen bg-gray-300 text-gray-950 p-4 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="">
          <div className="w-full">
            <div className="w-full flex justify-end">
            <IoMdClose className="absolute top-0 left-0 bg-gray-700 text-white rounded-xl cursor-pointer" onClick={toggle}/>
            </div>
          </div>
          <div className="w-full h-96 bg-gray-500 px-3 py-2 rounded-2xl text-center mt-10">
            <div className="w-full bg-gray-500 px-3 py-2 rounded-2xl text-center">
              <h1 className="text-red-900 font-bold">کافه خلیفه</h1>
            </div>
            <ul className="flex-col w-full bg-gray-500 mt-1 rounded-2xl p-2 gap-8">
              <li className="w-full my-3 text-white hover:bg-gray-300 hover:text-gray-800 rounded-lg px-1 cursor-pointer transition-all duration-300">
                خانه
              </li>
              <li className="w-full my-3 text-white hover:bg-gray-300 hover:text-gray-800 rounded-lg px-1 cursor-pointer transition-all duration-300">
                منو
              </li>
              <li className="w-full my-3 text-white hover:bg-gray-300 hover:text-gray-800 rounded-lg px-1 cursor-pointer transition-all duration-300">
                درباره ما
              </li>
              <li className="w-full my-3 text-white hover:bg-gray-300 hover:text-gray-800 rounded-lg px-1 cursor-pointer transition-all duration-300">
                ارتباط با ما
              </li>
            </ul>
            <div className="">
              <div className="w-full mt-5">
                <img src={logomenu} className="m-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
