// app/pages/_app.js (or _app.jsx if you are using JSX syntax)
import React from 'react';
import Navbar from '@/components/shared/navbar/Navbar'; // Adjust the path if needed
import LeftSidebar from '@/components/LeftSidebar'; // Adjust the path if needed

const Layout = ({ children }) => {
  return (
    <div className='relative min-h-screen bg-green-100'>
      <Navbar />
      <div className='flex pt-16' >
        <LeftSidebar />
        <main className='flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-14 bg-gray-100'>
          <div className='mx-auto w-full max-w-5xl'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
