import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutimg from "../assets/img1.jpeg";
function About() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={aboutimg}
        title="About"
        btnClass="hide"
      />
    </>
  );
}

export default About;