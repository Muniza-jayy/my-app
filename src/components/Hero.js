import "./HeroStyles.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt={props.title || "Hero"} src={props.heroImg} />

      <div className="hero-text">
        {props.title && <h1>{props.title}</h1>}
        {props.text && <p>{props.text}</p>}
        {props.buttonText && props.url && (
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;
