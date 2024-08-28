import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#">Dynamic HomePage & CV</a>
        </div>
         <ul className="flex space-x-4">
         <li>
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded block">Home</a>
          </li>
          <li>
            <a href="/admin" className="text-white hover:bg-gray-700 px-3 py-2 rounded block">Admin Tool</a>
          </li>
          <li>
            <a href="/cv" className="text-white hover:bg-gray-700 px-3 py-2 rounded block">Curriculum Vitae</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
