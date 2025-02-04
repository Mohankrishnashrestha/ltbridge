import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Service from "./pages/servicess/Service";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Header from "./component/Header";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Serviceslug from "./pages/servicess/Serviceslug";
import Workslug from "./pages/work/Workslug";
import Careerslug from "./pages/career/Careerslug";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:slug" element={<Careerslug />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:slug" element={<Serviceslug />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<Workslug />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
