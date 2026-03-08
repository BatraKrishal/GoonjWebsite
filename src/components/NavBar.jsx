import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-4 w-full">
      <div className="flex justify-between md:justify- items-center">
        <img src="/images/nav-logo.png" alt="nav-logo" className="md:w-48 w-24" />
        
        
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#523122] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#523122] ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#523122] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <div className={`fixed md:relative top-0 right-0 md:h-auto h-dvh md:w-auto w-64 bg-milk md:bg-transparent md:flex items-center md:opacity-100 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 md:pointer-events-auto`}>
          <div className="md:hidden pt-20 px-6 flex flex-col gap-6">
            <a href="#home" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#message" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Message</a>
            <a href="#flavors" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Flavors</a>
            <a href="#nutrition" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Nutrition</a>
            <a href="#benefits" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          </div>
        </div>

        <div className="absolute right-30">
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="/" className="text-[#ffffff] hover:underline text-xl font-bold">Home</a>
            </li>
            <li>
              <a href="events" className="text-[#ffffff] hover:underline text-xl font-bold">Events</a>
            </li>
            <li>
              <a href="teams" className="text-[#ffffff] hover:underline text-xl font-bold">Teams</a>
            </li>
            <li>
              <a href="about" className="text-[#ffffff] hover:underline text-xl font-bold">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
