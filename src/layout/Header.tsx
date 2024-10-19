import { Link } from "react-router-dom";
import Decipher from "../assets/Decipher-Logo.png";
import { ButtonMailto } from '../pages/Contact';
import React, { useState } from 'react';

const MenuIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    viewBox="0 0 256 256"
    onClick={onClick}
    className="cursor-pointer w-10 lg:w-12 fill-Alpha block md:hidden"
  >

    <defs>
    </defs>
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M78.969 0H11.031C4.939 0 0 4.939 0 11.031v67.937C0 85.061 4.939 90 11.031 90h67.937C85.061 90 90 85.061 90 78.969V11.031C90 4.939 85.061 0 78.969 0zM69.488 68.568H20.511c-2.209 0-4-1.791-4-4s1.791-4 4-4h48.977c2.209 0 4 1.791 4 4S71.697 68.568 69.488 68.568zM69.488 49H20.511c-2.209 0-4-1.791-4-4s1.791-4 4-4h48.977c2.209 0 4 1.791 4 4S71.697 49 69.488 49zM69.488 29.432H20.511c-2.209 0-4-1.791-4-4s1.791-4 4-4h48.977c2.209 0 4 1.791 4 4S71.697 29.432 69.488 29.432z"
        style={{ fill: 'inherit' }}
      />
    </g>
  </svg>
);

export default function Header() {
  const css = `.backdrop-blur { backdrop-filter: blur(10px); }`
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 md:w-full backdrop-blur bg-Beta-secondary/20 z-10">
      <style>{css}</style>
      <section className="flex justify-between items-center shrink-0 py-2 px-4 md:px-0 container mx-auto relative">
        <img src={Decipher} alt="Decipher Logo" className="h-12 lg:h-[60px]" />

        <nav className="hidden md:block">
          <ul className="flex justify-between items-center gap-5">
            <li><Link to='/' className="hover:text-cyan-400">Home</Link></li>
            <li><Link to='/about' className="hover:text-cyan-400">About</Link></li>
            <li><Link to='/services' className="hover:text-cyan-400">Services</Link></li>
            <li><Link to='/pricing' className="hover:text-cyan-400">Pricing</Link></li>
            <li><Link to='/contact' className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </nav>
        <button className="hidden md:flex justify-center items-center gap-1 px-2 py-1 group hover:bg-Alpha transition duration-300 ease-in rounded-xl" title="call-opt">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="inherit" className="fill-Alpha group-hover:fill-Dark">
            <path d="M3.08998 10C2.20421 10 1.47949 9.25 1.47949 8.33333V4.16667C1.47949 3.25 2.20421 2.5 3.08998 2.5H9.53193C10.4177 2.5 11.1424 3.25 11.1424 4.16667V8.33333C11.1424 9.25 10.4177 10 9.53193 10H7.92144V12.5L5.50571 10H3.08998ZM17.5844 15C18.4701 15 19.1948 14.25 19.1948 13.3333V9.16667C19.1948 8.25 18.4701 7.5 17.5844 7.5H12.7529V8.33333C12.7529 10.1667 11.3035 11.6667 9.53193 11.6667V13.3333C9.53193 14.25 10.2566 15 11.1424 15H12.7529V17.5L15.1686 15H17.5844Z" fill="inherit" />
          </svg>
          <p className="text-left leading-5 group-hover:text-Dark"><ButtonMailto label="Call us <br />+212 7 62 86 16 97" sendto="tel:212762861697" /></p>
        </button>

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && <Menu />}
      </section>
    </header>
  );
};

const Menu: React.FC = () => {
  const [topPosition, setTopPosition] = useState(0);

  React.useEffect(() => {
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    setTopPosition(headerHeight);
  }, []);

  return (
    <nav style={{ position: 'fixed', top: `calc(${topPosition}px)`, right: '0' }} className="bg-Beta py-4 px-12 rounded-b-xl">
      <ul className="flex flex-col justify-between items-center gap-5">
        <li><Link to='/' className="hover:text-cyan-400">Home</Link></li>
        <li><Link to='/about' className="hover:text-cyan-400">About</Link></li>
        <li><Link to='/services' className="hover:text-cyan-400">Services</Link></li>
        <li><Link to='/pricing' className="hover:text-cyan-400">Pricing</Link></li>
        <li><Link to='/contact' className="hover:text-cyan-400">Contact</Link></li>
      </ul>
    </nav>
  );
};