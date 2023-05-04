import { Link } from "react-router-dom";
import ProjectCard from "../parts/ProjectCard.js";

import pokedex from "../../assets/pokedex-logo.svg";
import sfmk from "../../assets/sfmk-logo.svg";
/* 
import profile_image from "../../assets/profile.svg"; */
/* import sannaohlander from thumbnail + "sannaohlander"; */

function ProjectPreview() {
  return (
    <section className="project-preview-section">
      <div className="project-preview-grid">
        <div class="project-preview__nav">
          <h1 className="project-preview__nav-title">Projects</h1>
          <div className="project-preview__nav-see-all">
            <Link to="/projects">View all</Link>
          </div>
        </div>
        <div className="project-preview__cards">
          <div className="project-preview__cards-item">
            <ProjectCard
              thumbnail={pokedex}
              intro="Search and filter through pokémons with this App made in ReactJS"
              title_github="github"
              title_site="pokédex"
              github_url="Examensarbete-Pokedex-ReactJS"
              site_url="nm-pokedex-reactjs.netlify.app/"
            />
          </div>
          <div className="project-preview__cards-item">
            {" "}
            <ProjectCard
            thumbnail={sfmk}
              intro="Website made for art collections in Malmö city"
              title_site="sfmk.org"
              site_url="www.sfmk.org"
            />
          </div>
          <div className="project-preview__cards-item">
            {" "}
            <ProjectCard
              intro="intro test text 3"
              title_site="sitename"
              title_github="github"
              github_url="test"
              site_url="google.se"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectPreview;
