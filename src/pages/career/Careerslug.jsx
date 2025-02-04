import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
function Careerslug() {
  const params = useParams();
  console.log(params.slug);
  const [service, setService] = useState([]);
  async function serviceslug() {
    try {
      const response = await fetch("https://itbridge.com.np/api/career");
      const data = await response.json();
      setService(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const filterdatas = service.filter((item) => item.slug === params.slug);

  const fp = filterdatas[0];
  console.log(fp);

  useEffect(() => {
    serviceslug();
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
      <div className="max-w-6xl mx-auto ">
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: fp.excerpt }}
            className="text-[15px] text-gray-700 p-2"
          />
        </div>
        <div className="w-full lg:flex-row lg:flex p-5">
          <div className="lg:w-[50%] p-10">
            <h3 className="font-medium text-2xl">Responsibilites</h3>
            <div
              className="text-gray-700 text-[15px ] p-2 leading-8"
              dangerouslySetInnerHTML={{ __html: fp.responsibilites }}
            />
            <button className="border py-3 px-10 bg-[#ff7600] text-white font-medium flex gap-2 items-center">
              Apply Now
              <FaTelegramPlane className="text-xl" />
            </button>
          </div>
          <div className="lg:w-[50%] bg-[#fff901] p-10">
            <h3 className="font-medium text-2xl">Requirements</h3>
            <div
              dangerouslySetInnerHTML={{ __html: fp.requirements }}
              className="text-gray-700 text-[15px ] p-2 leading-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careerslug;
