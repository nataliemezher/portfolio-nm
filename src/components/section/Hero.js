import { Link } from "react-router-dom";
import profile_image from "../../assets/profile.svg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__image">
        <img alt="profileimg" src={profile_image}></img>
      </div>
      <div className="hero-section__cta">
       <div className="typewriter">
        <h1 className="hero-section__cta-title">Web developer.</h1>
        </div>
        <div className="hero-section__cta-text">
          <p>
            I'm a developer who's passionate about code and has a keen eye for detail.
          </p>
        </div>
        <button className="hero-section__cta-button primary-button">
          {" "}
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </section>
  );
}
export default Hero;
