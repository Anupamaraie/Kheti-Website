import React from 'react';
import { Link } from 'react-router-dom';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div id='pricingid' name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1000px] mx-auto py-5'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-4xl uppercase'>E-commerce</h2>
          <h3 className='text-3xl font-bold text-white py-8'>Choose the best products with the best price.</h3>
          {/* <p className='text-3xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p> */}
        </div>

        <div className='grid md:grid-cols-2'>

        <div className='bg-white text-slate-900 m-4 p-5 rounded-xl shadow-2xl relative h-[550px]'>
            {/* <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span> */}
            <div>
              <p className='text-4xl font-bold py-2 flex'>Hybrid Plants<span className='text-xl text-slate-500 flex flex-col justify-end'></span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Get the appropriate tools for rooftop farming of any type.</p>
            <div className='text-2xl'>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Hybrid apple</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Hybrid orange</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Hybrid lemon</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Hybrid mango</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Hybrid strawberry</p>
                <Link to="pharmacy">
                <button className='w-full py-4 my-4'>Read More</button>
                </Link>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-5 rounded-xl shadow-2xl relative h-[550px]'>
            {/* <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span> */}
            <div>
              <p className='text-4xl font-bold py-2 flex'>Agricultural tools<span className='text-xl text-slate-500 flex flex-col justify-end'></span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Get the appropriate tools for rooftop farming of any type.</p>
            <div className='text-2xl'>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Compost bin</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Seed Drill</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Coco pit</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Water Can</p>
                <p className='flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'  />Soil</p>
                <Link to="pharmacy">
                <button className='w-full py-4 my-4'>Read More</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
