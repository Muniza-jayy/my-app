import Hero from "../components/Hero";
import serviceimg from "../assets/img3.jpeg";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={serviceimg}
        title="Services"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
