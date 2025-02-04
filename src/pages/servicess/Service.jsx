import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Service() {
  const [state, setState] = useState([]);
  async function service() {
    try {
      const response = await fetch("https://itbridge.com.np/api/service");
      const data = await response.json();
      setState(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    service();
  }, []);

  return (
    <div className="w-full justify-center items-center mt-20">
      <div className="bg-[#00000063] h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-2xl">Services</h2>
        </div>
      </div>
      <section className="w-full h-[50px]"></section>
      <div className="max-w-6xl mx-auto flex flex-col py-2 ">
        <div className="flex justify-center items-center p-5">
          <h2 className="font-medium text-xl">
            Services we provide for you business
          </h2>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {state.map((item, index) => (
            <li
              key={index}
              className="flex-col flex justify-center items-center"
            >
              <div
                className="relative bg-cover bg-center flex  items-end w-90 h-60 transition-transform p-5 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.photo})` }}
              >
                <NavLink to={"/service/" + item.slug}>
                  <h3 className="absolutes text-white inset-0 ">
                    {item.title}
                  </h3>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
