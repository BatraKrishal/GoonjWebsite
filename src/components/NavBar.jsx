import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 md:p-9">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/nav-logo.png" alt="nav-logo" className="md:w-48 w-24" />
        </Link>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#523122] transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#523122] ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#523122] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        <div
          className={`fixed top-0 right-0 h-dvh w-64 bg-milk transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 pt-20">
            {isHomePage && (
              <>
                <a href="#home" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#message" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Message</a>
                <a href="#flavors" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Events</a>
                <a href="#nutrition" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Fest Info</a>
                <a href="#benefits" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Highlights</a>
              </>
            )}
            <Link to="/events" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Events Page</Link>
            <Link to="/about" className="text-[#523122] text-xl font-bold" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        </div>

        <div className="absolute right-30">
          <ul className="hidden gap-8 md:flex">
            <li>
              <Link to="/" className="text-[#ffffff] hover:underline text-xl font-bold">Home</Link>
            </li>
            <li>
              <Link to="/events" className="text-[#ffffff] hover:underline text-xl font-bold">Events</Link>
            </li>
            <li>
              <Link to="/teams" className="text-[#ffffff] hover:underline text-xl font-bold">Teams</Link>
            </li>
            <li>
              <Link to="/about" className="text-[#ffffff] hover:underline text-xl font-bold">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
