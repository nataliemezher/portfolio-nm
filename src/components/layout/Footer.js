/* import { Link } from "react-router-dom"; */
import github_link from "../../assets/social-github.svg";
import linkedin_link from "../../assets/social-linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-social">
          <a target="_blank" rel="noreferrer" href="https://github.com/nataliemezher">
            <img alt="github-icon" src={github_link} style={{ width: "40px" }}></img>
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/natalie-mezher-81a913224/">
            <img alt="linkedin-icon" src={linkedin_link} style={{ width: "40px" }}></img>
          </a>
        </div>
        <div className="footer-menu">
          <ul className="footer-navigation__menu-list">
            <li className="footer-navigation__menu-item">
              <Link to="/cv">CV</Link>
            </li>
            <li className="footer-navigation__menu-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="footer-navigation__menu-item">
              <Link  to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-email">
          <a href="mailto:nataliemezher96@hotmail.com"> nataliemezher96@hotmail.com</a>
        </div>
      </div>
      <div class="attributions">
        <a href="https://iconscout.com/icons/github" target="_blank">
          Free Github Icon
        </a>{" "}
        by{" "}
        <a href="https://iconscout.com/contributors/pixel-icons">Pixel Icons</a>{" "}
        on <a href="https://iconscout.com">IconScout</a>
      </div>
    </footer>
  );
   // eslint-disable-next-line react-hooks/exhaustive-deps
}
export default Footer;
