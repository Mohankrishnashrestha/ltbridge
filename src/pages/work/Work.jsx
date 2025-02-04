import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Aos from "aos";

function Work() {
  const [state, setState] = useState([]);
  async function work() {
    try {
      const response = await fetch("https://itbridge.com.np/api/work");
      const data = await response.json();
      setState(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    work();
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full justify-center items-center mt-20">
      <div className="bg-[#00000063] h-50 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-3xl font-medium">Work</h2>
        </div>
      </div>
      <section className="w-full h-[50px]"></section>
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-5  ">
          {state.map((item, index) => (
            <li
              key={index}
              className="flex-col flex justify-center items-center shadow"
            >
              <div className="flex w-full gap-2 p-2">
                <div className="lg:w-[30%]">
                  <NavLink to={"/work/" + item.slug}>
                    <img
                      src={item.photo}
                      alt=""
                      className="w-35"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    />
                  </NavLink>
                </div>
                <div className="lg:w-[70%] flex flex-col items-start justify-center p-2">
                  <NavLink to={"/work/" + item.slug}>
                    <h2 className="font-bold hover:underline">{item.title}</h2>
                  </NavLink>

                  <p className="text-[15px] mb-5">{item.alias}</p>
                  <TiTick className="text-2xl" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Work;
