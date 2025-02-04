import { useEffect } from "react";
import Aos from "aos";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-20 w-[100%] flex flex-col justify-center items-center lg:mt-20 ">
      <div className="lg:max-w-6xl lg:mx-auto ">
        <div>
          <img
            src="../images/home/itbridge-1.png"
            alt="image of IT bridge"
            className=" p-3"
          />
        </div>
        <div className="flex flex-col justify-center lg:flex lg:flex-row">
          <img
            src="/images/home/image-1.png"
            alt="image of the description"
            className="px-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          />

          <p className="px-3">
            IT-Bridge Nepal is a privately held company, consisting of a
            creative and multi-talented team comprised of web designers, web
            developers and graphic designers. We provide a wide range of
            services including web design, web development, and mobile
            application development, web hosting, and consulting. IT-Bridge
            Nepal offers customer-oriented services and delivers creative and
            effective results.
          </p>
        </div>
        <div className="lg:flex justify-center gap-3 w-full">
          <div className="relative lg:w-[40%] p-2">
            <img
              src="/images/home/teamwork.jpg"
              alt="image of teamwork"
              className="w-full h-full"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <div className="absolute inset-0 flex items-end">
              <h5 className="text-white text-xl lg:text-2xl p-3">
                WHY CHOOSE US ?
              </h5>
            </div>
          </div>
          <div className="relative lg:w-[40%] p-2">
            <img
              src="/images/home/vison.jpg"
              alt="iamge of vision"
              className="w-full h-full"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <div className="absolute inset-0 flex items-end">
              <h5 className=" text-white text-xl lg:text-2xl p-3">Vision</h5>
            </div>
          </div>
        </div>
        <div className="lg:not-first:mt-[20px]">
          <div className="flex justify-center bold text-xl p-2 ">
            <h3>It Bridge is Perfect for your Business</h3>
          </div>
          <div className="flex flex-col lg:gap-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center p-2">
              <div
                className="lg:flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i1.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Domain Expert</h4>
              </div>
              <div
                className="lg:flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i2.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Creative Experts</h4>
              </div>
              <div
                className="lg:flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i3.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Dedication</h4>
              </div>
            </div>
            <div className="grid  lg:grid-cols-4 gap-2 p-2  justify-items-center">
              <div
                className="lg:flex flex-col justify-center-center p-2 items-center gap-[10px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i4.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Innovation</h4>
              </div>
              <div
                className="lg:flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i5.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Experienced</h4>
              </div>
              <div
                className="lg:flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i6.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Dedication Team</h4>
              </div>
              <div
                className="flex flex-col justify-center p-2 items-center gap-[10px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home/i7.png"
                  alt="image"
                  className="lg:w-[60px]"
                />
                <h4>Quality Products</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/home/career-inner.jpg')] w-screen h-[200px] bg-cover bg-center relative flex justify-center items-center linear-gradient(180deg, rgba(138,8,53,0.5) 0%, rgba(187,37,132,0.5) 35%, rgba(193,107,164,0.5) 65%, rgba(58,170,193,0.5) 100%">
        <div className="text-white absolute"> hello</div>
      </div>
    </div>
  );
}

export default Home;
