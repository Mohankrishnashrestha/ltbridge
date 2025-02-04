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
          <h2 className="text-white text-3xl font-medium">Career</h2>
        </div>
      </div>
      <section className="w-full h-[50px]"></section>
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <div className="lg:w-[60%] flex ">
          <p className="p-2">
            IT-Bridge Nepal is a privately held company, consisting of a
            creative and multi-talented team comprised of web designers, web
            developers and graphic designers. We provide a wide range of
            services including web design, web development, and mobile
            application development, web hosting, and consulting. IT-Bridge
            Nepal offers customer-oriented services and delivers creative and
            effective results.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <h2 className="p-2 font-medium text-2xl">
            Currently opening Positions
          </h2>
        </div>
        <section className="w-full h-[50px]"></section>
        <ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 p-2 ">
          {state.map((item, index) => (
            <li
              key={index}
              className="flex-col flex items-center shadow h-[400px] overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="lg:w-[30%]">
                <NavLink to={"/career/" + item.slug}>
                  <img src={item.photo} alt="" className="" />
                </NavLink>
              </div>
              <div className="lg:w-[70%] flex flex-col items-start justify-center p-2">
                <NavLink to={"/career/" + item.slug}>
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
