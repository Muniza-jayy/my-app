import Hero from "../components/Hero";
import serviceimg from "../assets/img3.jpeg";
import planningImg from "../assets/27AAC8BC-D112-4A0D-ACCD-0543583658C4_4_5005_c.jpeg";
import hotelImg from "../assets/A71D8EFD-E032-44F7-9857-DFBB7DFCF747_4_5005_c.jpeg";
import tourImg from "../assets/E9254540-1A67-4A40-8D50-2933646424D3_1_105_c.jpeg";
import "./ServiceStyles.css";

const services = [
  {
    image: planningImg,
    title: "Destination Planning",
    text: "Get a clear travel plan with destination ideas, route suggestions, and timing that fits your trip.",
  },
  {
    image: hotelImg,
    title: "Hotel Booking",
    text: "Find comfortable stays near the places you want to visit, with options for different budgets.",
  },
  {
    image: tourImg,
    title: "Guided Tours",
    text: "Book guided experiences that help you explore local highlights, culture, food, and scenery.",
  },
];

function ServiceCard(props) {
  return (
    <div className="service-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={serviceimg}
        title="Services"
      />
      <section className="services-container">
        <h2>Our Services</h2>
        <p>
          From planning to guided experiences, Trippy helps you organize the
          important parts of your journey in one place.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Service;
