import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown, FaCar } from "react-icons/fa";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// Fonction pour les liens du menu déroulant
const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

// Composant Navbar
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Premier div du home page */}
      <div className={`fixed top-0 right-0 w-full shadow-md ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        {/* Div pour la bande de couleur */}
        <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile No. 237658488485</p>
            </div>
          </div>
        </div>
        {/* Prochaine section de la navbar */}
        <div className="container py-3 sm:py-0">
          <div className='flex justify-between items-center'>
            {/* Div du logo */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex items-center">
                  <FaCar className="text-blue-500 mr-2" />
                  <h1 className="text-3xl font-bold font-serif">
                    <span className="text-blue-500">EASY</span>
                    <span className="text-black">-WAY</span>
                  </h1>
                </div>
              </Link>
            </div>
            {/* Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>SERVICES</NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/places" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
                </li>
                {/* Dropdown */}
                <li className='py-4 relative group cursor-pointer'>
                  <div className='dropdown flex items-center'>
                    <span>Quick Links</span>
                    <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
                  </div>
                  <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a className="inline-block w-full rounded-md p-2 hover:bg-blue-500/20" href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* Icône de thème */}
                <li className="py-4">
                  {theme === "dark" ? (
                    <BiSolidSun onClick={toggleTheme} className="text-2xl cursor-pointer" />
                  ) : (
                    <BiSolidMoon onClick={toggleTheme} className="text-2xl cursor-pointer" />
                  )}
                </li>
              </ul>
            </div>
            {/* Bouton de connexion et icône de menu pour mobile */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Icône de thème pour mobile */}
              {theme === "dark" ? (
                <BiSolidSun onClick={toggleTheme} className="text-2xl cursor-pointer" />
              ) : (
                <BiSolidMoon onClick={toggleTheme} className="text-2xl cursor-pointer" />
              )}
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-600 text-white px-3 py-1 rounded-full">
                connexion
              </button>
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
              )}
            </div>
          </div>
        </div>
        {/* Menu responsive */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  )
}

export default Navbar;
