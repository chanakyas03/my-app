import ExternalLink from "../atoms/ExternalLink";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card bg-dark text-white h-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title h5">{project.title}</h3>
        <p className="card-text text-secondary">{project.description}</p>
        
        <ul className="list-inline mb-3">
          {project.tech.map((item) => (
            <li key={item} className="list-inline-item badge bg-secondary me-1">
              {item}
            </li>
          ))}
        </ul>

        <div className="d-flex gap-3">
          <ExternalLink href={project.github}>GitHub</ExternalLink>
          {project.live && <ExternalLink href={project.live}>Live</ExternalLink>}
        </div>
      </div>
    </div>
  );
}
