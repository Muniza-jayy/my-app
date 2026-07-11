import "./HeroStyles.css"
function Hero(props){
    return(
        <>
        <div className="Hero">
            <img alt="HeroImage" src="https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        <div className="Hero-text">
            <h1>Your Journey Your story</h1>
            <p>Choose your favourite destination</p>
            <a href="/">travel plan</a>
        </div>
        </div>
        </>
    );

}
export default Hero;