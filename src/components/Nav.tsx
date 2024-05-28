const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-10 text-white text-decoration-none bg-transparent pr-5">
      <div>logo here</div>
      <div className="flex justify-between items-center">
        <div className="relative flex items-center pl-4">
          <a href="#hero" className="text-black text-decoration-none">
            Home
          </a>
        </div>
        <div className="relative flex items-center pl-4">
          <a href="#about" className="text-black text-decoration-none">
            About
          </a>
        </div>
        <div className="relative flex items-center pl-4">
          <a href="#projects" className="text-black text-decoration-none">
            Projects
          </a>
        </div>
        <div className="relative flex items-center pl-4">
          <a href="#contact" className="text-black text-decoration-none">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
