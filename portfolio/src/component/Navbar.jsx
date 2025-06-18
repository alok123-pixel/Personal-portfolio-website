import React from "react";


const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-fit">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl rounded-full px-6 md:px-8 py-3 flex items-center gap-4">
        <ul className="flex gap-6 md:gap-8 justify-center items-center text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-300 hover:text-purple-500"
              >
                {item}
                <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-purple-400"></span>
              </a>
            </li>
          ))}
        </ul>

       
      </div>
    </nav>
  );
};

export default Navbar;
