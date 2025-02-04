import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Workslug() {
  const params = useParams();
  console.log(params.slug);
  const [work, setWork] = useState([]);
  async function workslug() {
    try {
      const response = await fetch("https://itbridge.com.np/api/work");
      const data = await response.json();
      setWork(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const filterdatas = work.filter((item) => item.slug === params.slug);

  const fp = filterdatas[0];
  console.log(fp);

  useEffect(() => {
    workslug();
  }, []);
  if (filterdatas.length === 0) {
    return <div>data not found</div>;
  }
  return (
    <div className="w-full justify-center items-center mt-20 ">
      <div className="bg-[#00000063] h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-3xl font-medium">{fp.title}</h2>
        </div>
      </div>
      <section className="w-full h-[50px]"></section>
      <div className="max-w-6xl mx-auto lg:flex flex-row w-full p-2 justify-center">
        <div className="lg:w-[50%]">
          <img src={fp.photo} alt="image" className="w-[500px]" />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="font-medium text-xl">{fp.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: fp.excerpt }}
            className="text-[15px] text-gray-700 p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Workslug;
