import Hero from "../components/Hero";
import aboutimg from "../assets/img1.jpeg";
import aboutDetailImg from "../assets/img2.jpeg";
import "./AboutStyles.css";

const aboutItems = [
  {
    title: "Mission",
    text: "Our mission is to make travel planning simple, reliable, and inspiring for every kind of traveler.",
  },
  {
    title: "Vision",
    text: "We want Trippy to become a trusted place where people discover destinations, compare experiences, and plan trips with confidence.",
  },
  {
    title: "Why Choose Us",
    text: "We focus on clear recommendations, useful travel support, and experiences that match your budget, time, and travel style.",
  },
];

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={aboutimg}
        title="About"
      />
      <section className="about-container">
        <div className="about-intro">
          <div>
            <h2>We help you travel better</h2>
            <p>
              Trippy is a travel platform built for people who want memorable
              destinations without complicated planning. From quick getaways to
              longer holidays, we help travelers explore places, compare options,
              and shape trips that feel personal.
            </p>
          </div>
          <img src={aboutDetailImg} alt="Travelers exploring a scenic destination" />
        </div>

        <div className="about-grid">
          {aboutItems.map((item) => (
            <div className="about-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
