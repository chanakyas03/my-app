const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack shopping platform with user login, cart, checkout, and admin dashboard.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind"],
    live: "https://shop.apnikheti.com/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site built with Atomic Design and Next.js.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="h2 border-bottom pb-2 mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.title} className="col-md-6 mb-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ul className="list-inline">
                  {project.tech.map((item) => (
                    <li key={item} className="list-inline-item badge bg-secondary me-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  {/* <a href={project.github} className="link-info me-3" target="_blank" rel="noopener noreferrer">GitHub</a> */}
                  {project.live && (
                    <a href={project.live} className="link-info" target="_blank" rel="noopener noreferrer">Live</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
