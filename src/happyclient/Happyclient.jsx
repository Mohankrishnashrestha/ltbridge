import { useEffect, useState } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
function Happyclient() {
  const [state, setState] = useState();
  async function happyclient() {
    try {
      const response = await fetch("https://itbridge.com.np/api/happy-client");
      const data = await response.json();
      console.log(data.data);
      setState(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    happyclient();
  }, []);
  if (!state) {
    return <div>loading.....</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="w-screen h-[50px]" />
      <h2 className="text-2xl font-medium p-2">Our Happpy Client</h2>
      <section className="w-screen h-[50px]" />
      <div className="flex flex-row items-center gap-[50px]">
        <button>
          <HiOutlineArrowSmallLeft />
        </button>
        <ul className="grid lg:grid-cols-3 grid-cols-1">
          {state.map((item, index) => (
            <li key={index}>
              <img src={item.photo} alt="photo" className="w-[100px]" />
            </li>
          ))}
        </ul>
        <button>
          <HiOutlineArrowSmallRight />
        </button>
      </div>
    </div>
  );
}

export default Happyclient;
