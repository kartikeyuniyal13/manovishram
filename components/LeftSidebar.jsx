// app/components/LeftSidebar.jsx
import React from 'react';

const LeftSidebar = () => {
  return (
    <aside className='light_border sticky top-16 h-[calc(100vh-4rem)] flex flex-col justify-between overflow-y-auto border-r p-6 max-sm:hidden lg:w-[266px] custom-scrollbar bg-green-500'>
      <p className="text-white">LeftSidebar</p>
    </aside>
  );
};

export default LeftSidebar;
