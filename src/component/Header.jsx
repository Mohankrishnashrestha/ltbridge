import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w[100%] flex justify-center items-center p-2 bg-amber-100">
      <div className="flex w-6xl justify-between ">
        <div>
          <img
            src="/images/imageHeading/logo.png"
            alt="image of logo"
            className="h-12"
          />
        </div>
        <div className="flex items-center cursor-pointer relative text-2xl ">
          <GiHamburgerMenu
            onClick={() => setToggle(!toggle)}
            className="lg:hidden"
          />

          <div
            className={
              toggle
                ? "block lg:flex space-x-6 items-center right-[80px] top-9 w-[200px] absolute"
                : "hidden lg:flex space-x-6 items-center"
            }
          >
            <ul className="flex flex-col items-center  mt-4 lg:flex-row sm:flex-col gap-5 ">
              <li className="p-1 ">
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li className="p-1">
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li className="p-1">
                <NavLink to={"service"}>Our Services</NavLink>
              </li>
              <li className="p-1">
                <NavLink to={"/work"}>Our Work</NavLink>
              </li>
              <li className="p-1">
                <NavLink to={"/career"}>Career</NavLink>
              </li>
              <li className="p-1">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
