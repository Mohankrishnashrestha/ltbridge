import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  const [name, setName] = useState("");

  console.log(name);
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [subject, setSubject] = useState();
  const [mind, setMind] = useState();
  const [error, setError] = useState("");
  function submit() {
    if (name === "") {
      setError("Enter the name!");
      return;
    }
    if (email === "") {
      setError("Enter the name!");
      return;
    }
    if (number === "") {
      setError("Enter the name!");
      return;
    }
    if (subject === "") {
      setError("Enter the name!");
      return;
    }
    if (mind === "") {
      setError("Enter the name!");
      return;
    }
    setError("");
    setEmail("");
    setName("");
    setNumber("");
    setSubject("");
    setMind("");
  }

  return (
    <div className="w-full">
      <section className="w-full h-20"></section>
      <div className="bg-[#00000063] lg:h-50 h-40 w-screen relative flex justify-center items-center">
        <div className="absolute">
          <h2 className="text-white text-2xl">Work</h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto lg:flex gap-3">
        <div className="lg:w-[70%] p-5 shadow flex flex-col items-center">
          <h2 className="font-medium text-xl">
            Contact us about anything related to our company or services.
            We&apos;ll do our best to get back to you as soon as possible.
          </h2>

          <div>{error}</div>
          <div className="flex flex-col gap-5 p-2 lg:w-[70%] ">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="shadow p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="shadow p-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="number"
              placeholder="Number"
              className="shadow p-2"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
            <input
              type="text"
              placeholder="Subject"
              className="shadow p-2"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="shadow p-2"
              onChange={(e) => setMind(e.target.value)}
              value={mind}
            />
            <button
              className="border p-2 w-[200px] bg-amber-900 text-white "
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="lg:w-[30%] p-5 shadow">
          <h2 className="font-medium text-xl">Banepa</h2>
          <div className="p-2 text-gray-500 leading-10">
            <p className="flex gap-2 flex-row items-center">
              <FaLocationDot />
              Banepa-8 Shantinagar
            </p>
            <p>
              <a
                href="tel:9845046048"
                className="flex gap-2 flex-row items-center"
              >
                <FaPhoneAlt />
                9845046048
              </a>
            </p>
            <p>
              <a
                href="maito:info@itbridge.com.np"
                className="flex gap-2 flex-row items-center"
              >
                <MdEmail />
                info@itbridge.com.np
              </a>
            </p>
          </div>
        </div>
      </div>
      <section className="w-screen h-[50px]"></section>
      <div className="max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.5570156424033!2d85.51351089999999!3d27.638233200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0fe087a9de87%3A0xe4828325dc04fc0!2sInformation%20Technology%20Bridge%20(IT%20BRIDGE%20)!5e0!3m2!1sen!2snp!4v1738776065938!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
