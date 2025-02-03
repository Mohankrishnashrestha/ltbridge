function About() {
  return (
    <div className="w-full justify-center items-center mt-20">
      <div className="bg-[#00000063] h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-2xl">About Us</h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-row w-full items-center justify-center">
        <div className="hidden lg:block lg:w-[50%] p-5">
          <div>
            <div>
              <img src="/images/home/image-1.png" alt="image" className="p-2" />
            </div>
            <div className="flex flex-col">
              <img
                src="/images/home/teamwork.jpg"
                alt="image of teamwork"
                className=""
              />
              <img
                src="/images/home/vison.jpg"
                alt="image of vision"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col gap-5 p-2">
          <div>
            <h2 className=" font-semibold text-2xl">OUR COMPANY</h2>
            <p className="text-[15px] text-gray-600 p-2">
              IT-Bridge Nepal is a privately held company, consisting of a
              creative and multi-talented team comprised of web designers, web
              developers and graphic designers. We provide a wide range of
              services including web design, web development, and mobile
              application development, web hosting, and consulting. IT-Bridge
              Nepal offers customer-oriented services and delivers creative and
              effective results.
            </p>
          </div>
          <div>
            <h2 className=" font-semibold text-2xl">Vision</h2>

            <p className="text-[15px] text-gray-600 p-2">
              <b>To</b> be at the forefront of application development and be
              respected for setting the highest standards of professionalism and
              Quality of Service.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className=" font-semibold text-2xl">WHY CHOOSE US ?</h2>
              <p className="text-[15px] text-gray-600 p-2">
                Nepal is fast emerging as a key destination of IT sector.
                IT-Bridge is a new Generation Software Company. In this scenario
                IT-Bridge has experienced dedicated development teams, Combining
                business and industry, knowledge with technology, who work
                closely with clients to produce comprehensive product. Our
                services and product are designed with a focus on stable and
                reliable business systems because:
              </p>
            </div>
            <div>
              <ul className="text-gray-800 flex flex-col gap-2">
                <li>Avoid the Risk.</li>
                <li>Follow Conceptual integrity.</li>
                <li>Process control.</li>
                <li>Inspection and testing.</li>
                <li>Product Cost and quality.</li>
                <li>On-time Delivery..</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center">
        <div>
          <h2>Meet Our team</h2>
          <div className="h-100 w-ful"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
