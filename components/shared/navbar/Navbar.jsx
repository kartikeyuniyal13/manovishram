// app/components/shared/navbar/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue-500 fixed top-0 w-full">
      <a href="/" className="flex items-center gap-1 text-white">
        <p>Navbar</p>
      </a>
    </nav>
  );
};

export default Navbar;
