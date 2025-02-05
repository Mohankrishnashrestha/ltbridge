import { FaGreaterThan } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="w-[100%] bg-[#8e0438]">
        <section className="w-full h-[30px]"></section>
        <div className="lg:flex max-w-6xl mx-auto p-2 justify-between items-center">
          <div className="text-white">
            <h2 className="font-medium text-2xl p-2">
              Want to work together ?
            </h2>
            <p className="text-[15px] text-amber-60 p-2">
              We are the perfect partner for your business.{" "}
            </p>
          </div>
          <div>
            <button
              className="flex gap-2 items-center border px-10 py-3 text-[#8e0438] bg-white"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Let&apos;s Talk <FaGreaterThan className="text-[10px]" />
            </button>
          </div>
        </div>
        <section className="w-full h-[30px]"></section>
        <div className="bg-[#272526]">
          <section className="w-full h-[30px]"></section>
          <div className="max-w-6xl mx-auto text-white p-2 lg:flex flex-row justify-between p-5">
            <div>
              <h3 className="font-medium text-xl">Information</h3>
              <ul className="p-2 text-amber-50">
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
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-xl">Banepa</h2>
              <div className="p-2  text-amber-50 leading-10">
                <p className="flex gap-2 flex-row items-center">
                  <FaLocationDot />
                  Banepa-8 Shantinagar
                </p>
                <p>
                  <a
                    href="tel:9845046048"
                    className="flex gap-2 flex-row items-center"
                  >
                    <FaPhoneAlt />
                    9845046048
                  </a>
                </p>
                <p>
                  <a
                    href="maito:info@itbridge.com.np"
                    className="flex gap-2 flex-row items-center"
                  >
                    <MdEmail />
                    info@itbridge.com.np
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3>Get In Touch</h3>
              <ul className="p-2 flex flex-col gap-3">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
          <section className="w-full h-[30px]"></section>
        </div>
      </div>
    </>
  );
}

export default Footer;
