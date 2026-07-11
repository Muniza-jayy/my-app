import Hero from "../components/Hero";
import contactimg from "../assets/img2.jpeg";

function Contact() {
  return (
    <>
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
