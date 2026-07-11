import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        title="Your Journey, Your Story"
        text="Choose your favourite destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;