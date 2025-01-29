function Home() {
  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center lg:mt-20">
      <div>
        <img
          src="../images/home/itbridge-1.png"
          alt="image of IT bridge"
          className=" p-3 lg:max-w-6xl"
        />
      </div>
      <div className="lg:max-w-6xl flex flex-col justify-center lg:flex lg:flex-row">
        <img
          src="/images/home/image-1.png"
          alt="image of the description"
          className="px-3"
        />

        <p className="px-3">
          IT-Bridge Nepal is a privately held company, consisting of a creative
          and multi-talented team comprised of web designers, web developers and
          graphic designers. We provide a wide range of services including web
          design, web development, and mobile application development, web
          hosting, and consulting. IT-Bridge Nepal offers customer-oriented
          services and delivers creative and effective results.
        </p>
      </div>
      <div>
        <img src="/images/home/teamwork.jpg" alt="image of teamwork" />
        <h5>WHY CHOOSE US ?</h5>
      </div>
      <div>
        <img src="/images/home/vison.jpg" alt="iamge of vision" />
        <h5>Vision</h5>
      </div>
    </div>
  );
}

export default Home;
