import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-sky-600">Rittichok</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-sky-600">Home</a></li>
        <li><a href="#about" className="hover:text-sky-600">About</a></li>
        <li><a href="#skills" className="hover:text-sky-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-sky-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-sky-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
