import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactimg from "../assets/img2.jpeg";

function Contact() {
  return (
    <>
        <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactimg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;