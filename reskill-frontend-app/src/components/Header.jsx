import React from 'react';

const Header = () => {
  return (
    <header className='w-full bg-white text-black p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold'>Site name</div>
        <nav className='space-x-4'>
          <span className='text-black'>Page</span>
          <span className='text-black'>Page</span>
          <span className='text-black'>Page</span>
          <button className='bg-black text-white hover:bg-gray-800 font-bold py-2 px-4 rounded'>
            Button
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
