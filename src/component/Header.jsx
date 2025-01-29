import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex justify-center items-center p-4 shadow-lg fixed top-0 left-0 z-10 bg-white">
      <div className="flex w-full max-w-6xl justify-between items-center">
        {/* Logo Section */}
        <div>
          <img
            src="/images/imageHeading/logo.png"
            alt="Company logo"
            className="h-12"
          />
        </div>

        <nav className="relative">
          <button
            onClick={() => setToggle(!toggle)}
            className="lg:hidden text-2xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <GiHamburgerMenu />
          </button>

          <ul
            className={
              toggle
                ? "block absolute bg-amber-100 lg:bg-transparent flex-col right-0 w-[150px] lg:w-auto lg:static lg:flex lg:flex-row"
                : "hidden gap-3 absolute flex-col lg:static lg:flex lg:flex-row"
            }
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
