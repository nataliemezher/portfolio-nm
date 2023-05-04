import { Link } from "react-router-dom";
const github = "https://github.com/nataliemezher/";
const https = "https://";

function ProjectCard({ thumbnail, intro, github_url, site_url, title_site, title_github}) {
  return (
    <div className="project-card">
        <img src={thumbnail} className="project-card__thumbnail"></img>
      <p className="project-card__intro">{intro}</p>
      {github_url && !site_url? (
        <button className="primary-button code-link">
          {" "}
          <Link to={github + github_url}>{title_github}</Link>
        </button>
      ) : site_url && !github_url ? (
        <button className="secondary-button site-link">
          {" "}
          <Link to={https + site_url}>{title_site}</Link>
        </button>
      ) : (
        <div className="project-card__cta-buttons">
          <button className="primary-button code-link">
            {" "}
            <Link to={github + github_url}>{title_github}</Link>
          </button>

          <button className="secondary-button site-link">
            {" "}
            <Link to={https + site_url}>{title_site}</Link>
          </button>
        </div>
      )}
    </div>
  );
}
export default ProjectCard;
