import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="magnetic-target p-2 -ml-2 rounded-full cursor-none transform-gpu origin-left">
          <Logo className="md:scale-120" spin={true} />
        </div>

        <div className="hidden md:flex gap-10 font-sans text-xs uppercase tracking-[0.2em] font-medium">
          <span className="magnetic-target cursor-none hover:text-goonj-cyan transition-colors duration-300">Experience</span>
          <span className="magnetic-target cursor-none hover:text-goonj-cyan transition-colors duration-300">Innovation</span>
          <span className="magnetic-target cursor-none hover:text-goonj-cyan transition-colors duration-300">Events</span>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden magnetic-target p-2 cursor-none">
          <div className="w-8 h-px bg-white mb-2"></div>
          <div className="w-8 h-px bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
