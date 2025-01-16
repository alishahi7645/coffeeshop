import React from 'react';
import coffeeMenu from '../../data'

function Menu() {
  return (
    <div className='my-20 p-5 max-w-6xl mx-auto'>
      <div className="text-center mb-10">
        <h4 className='text-2xl font-bold text-amber-950'>از یک ترکیب نوین و دل انگیز از قهوه لذت ببرید</h4>
        <p className="text-gray-600">همه طعم های قهوه را باما کشف کنید همیشه فنجانی جدید برای تجربه کردن وجود دارد</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            coffeeMenu.map((item) => (
                <div key={item.id} className='bg-white rounded-sm shadow-lg relative  pb-8 mt-2'>
                    <img src={item.image} alt={item.name} className='w-full object-contain h-48' />
                    <div className="text-center p-4">
                        <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                        <p className='text-gray-800 mb-2 text-sm'>{item.ingredients.join(" | ")}</p>
                        <p>{item.price.toLocaleString()} تومان</p>
                    </div>
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-amber-950 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"> سفارش</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Menu
