import { useState } from "react";

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
            <p>Banepa-8 Shantinagar</p>
            <p>9845046048 </p>
            <p>info@itbridge.com.np</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
