import { Link } from "react-router-dom";
import profile_image from "../../assets/profile.svg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__image">
        <img src={profile_image}></img>
      </div>
      <div className="hero-section__cta">
        <h1 className="hero-section__cta-title">Web developer</h1>
        <div className="hero-section__cta-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          L
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
