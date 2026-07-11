import "./DestinationStyles.css";

function Destination(props) {
  return (
    <section className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt={`${props.heading} destination view`} src={props.img1} />
        <img alt={`${props.heading} travel scene`} src={props.img2} />
      </div>
    </section>
  );
}

export default Destination;
