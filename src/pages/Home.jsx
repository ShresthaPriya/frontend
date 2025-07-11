// pages/Home.js
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/AboutUs";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <Slider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contacts">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
