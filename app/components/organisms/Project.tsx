const projects = [
  {
    title: "E-commerce Platform",
    description: "E-commmerce shopping platform with user login, cart, checkout, and admin dashboard.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind"],
    live: "https://shop.apnikheti.com/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site built with Atomic Design and Next.js.",
    tech: ["Next.js", "TypeScript", "Bootstrap"],
    live: "https://chanakya-portfolio-developer.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container-fluid py-5 fade-in project-section-bg position-relative overflow-hidden">
      <div className="mb-5 text-center">
        <div style={{height: '6px', width: 80, margin: '0 auto 1.5rem auto', borderRadius: 3, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))'}}></div>
        <h2 className="h2 section-title-accent mb-3">Projects</h2>
      </div>
      <div className="row justify-content-center g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-md-6 d-flex">
            <div className="bg-section rounded-4 shadow-sm p-4 flex-fill d-flex flex-column justify-content-between h-100 project-card-accent">
              <div>
                <h5 className="mb-2 text-accent fw-bold">{project.title}</h5>
                <p className="card-text text-secondary mb-3">{project.description}</p>
                <ul className="list-inline mb-3">
                  {project.tech.map((item) => (
                    <li key={item} className="list-inline-item badge badge-accent me-1 mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                {project.live && (
                  <a href={project.live} className="btn btn-outline-info btn-sm rounded-pill px-3 mt-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Optional: Add a faint SVG/abstract shape for depth */}
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', bottom: -80, right: -80, opacity: 0.08, zIndex: 0}}>
        <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-accent2)" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
