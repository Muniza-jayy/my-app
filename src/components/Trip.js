import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/27AAC8BC-D112-4A0D-ACCD-0543583658C4_4_5005_c.jpeg";
import Trip2 from "../assets/A71D8EFD-E032-44F7-9857-DFBB7DFCF747_4_5005_c.jpeg";
import Trip3 from "../assets/E9254540-1A67-4A40-8D50-2933646424D3_1_105_c.jpeg";

const trips = [
  {
    image: Trip1,
    heading: "Trip in Indonesia",
    text: "Explore tropical beaches, mountain views, and local culture with a relaxed travel plan.",
  },
  {
    image: Trip2,
    heading: "Trip in Malaysia",
    text: "Discover city landmarks, scenic islands, and food experiences across beautiful destinations.",
  },
  {
    image: Trip3,
    heading: "Trip in France",
    text: "Enjoy historic streets, iconic views, and memorable stays designed for comfortable travel.",
  },
];

function Trip() {
  return (
    <section className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        {trips.map((trip) => (
          <TripData
            key={trip.heading}
            image={trip.image}
            heading={trip.heading}
            text={trip.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Trip;
