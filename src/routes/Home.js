import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Mountain1 from "../assets/img1.jpeg";
import Mountain2 from "../assets/img2.jpeg";
import Beach1 from "../assets/img3.jpeg";
import Beach2 from "../assets/A71D8EFD-E032-44F7-9857-DFBB7DFCF747_4_5005_c.jpeg";

const destinations = [
  {
    className: "first-des",
    heading: "Taal Volcano, Batangas",
    text: "Taal Volcano is one of the most iconic views in the Philippines. The destination combines lake scenery, mountain landscapes, and peaceful viewpoints that make it a memorable stop for travelers.",
    img1: Mountain1,
    img2: Mountain2,
  },
  {
    className: "first-des-reverse",
    heading: "Mt. Daguldul, Batangas",
    text: "Mt. Daguldul offers a scenic trail experience with coastal views, fresh air, and quiet paths. It is a strong choice for travelers who want nature, movement, and a rewarding view.",
    img1: Beach1,
    img2: Beach2,
  },
];

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        title="Your Journey, Your Story"
        text="Choose your favourite destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame.</p>
        {destinations.map((destination) => (
          <Destination
            key={destination.heading}
            className={destination.className}
            heading={destination.heading}
            text={destination.text}
            img1={destination.img1}
            img2={destination.img2}
          />
        ))}
      </div>
      <Trip />
    </>
  );
}

export default Home;
