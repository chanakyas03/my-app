export default function About() {
  return (
    <section id="about" className="container py-5 fade-in">
      <h2 className="h2 section-title-accent mb-5 text-center">About Me</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 mb-4 mb-md-0">
          <p className="text-secondary fs-5">
          I&apos;m a developer passionate about crafting accessible, user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability. Currently, I&apos;m a Front-End Engineer at Cogneesol, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Apnikheti&apos;s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience
            
            
          </p>
        </div>
        <div className="col-md-5">
          <div className="bg-section rounded-4 p-4 h-100">
            <p className="text-accent fw-semibold mb-2">Technologies I&apos;ve been working with recently:</p>
            <ul className="list-unstyled row text-secondary mb-0">
              {["JavaScript (ES6+)", "TypeScript", "React Js", "Next.js", "Rest API", "Redux" ,"Graph QL Apollo Client","React Flow" , "BootStrap" , "Ant Design" ,"Git" , "Agile Methadology"].map((tech) => (
                <li key={tech} className="col-6 mb-1">• {tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
