import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";

function Career() {
  const [state, setState] = useState([]);
  async function career() {
    try {
      const response = await fetch("https://itbridge.com.np/api/career");
      const data = await response.json();
      setState(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    career();
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
        <ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5  ">
          {state.map((item, index) => (
            <li
              key={index}
              className="flex-col flex justify-center items-center shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="lg:w-[30%]">
                <NavLink to={"/work/" + item.slug}>
                  <img src={item.photo} alt="" className="" />
                </NavLink>
              </div>
              <div className="lg:w-[70%] flex flex-col items-start justify-center p-2">
                <NavLink to={"/work/" + item.slug}>
                  <h2 className="font-bold hover:underline">{item.title}</h2>
                </NavLink>
                <p className="text-[15px] mb-5">{item.alias}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.responsibilites }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Career;
