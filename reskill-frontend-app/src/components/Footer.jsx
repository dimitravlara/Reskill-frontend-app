import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-white text-black p-4 border-t border-gray-300'>
      <div className='container mx-auto flex justify-between items-center text-sm'>
        <div className='text-base'>Site name</div>
        <div>
          <ul className='space-y-2'>
            <li className='text-black font-bold mb-2'>Topic</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-2'>
            <li className='text-black font-bold mb-2'>Topic</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-2'>
            <li className='text-black font-bold mb-2'>Topic</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
            <li className='text-black'>Page</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

