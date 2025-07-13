export default function About() {
  return (
    <section id="about" className="container py-5">
      <h2 className="h2 border-bottom pb-2 mb-4">About Me</h2>
      <p className="text-secondary">
        Hello! I'm Chanakya Sharma, a web developer with a passion for crafting beautiful and performant digital experiences. I enjoy solving problems with clean, scalable code.
      </p>
      <p className="text-secondary">
        I'm currently focused on learning deeper frontend architecture, building personal tools, and contributing to open source.
      </p>
      <div>
        <p className="text-muted mb-2">Here are a few technologies I’ve been working with recently:</p>
        <ul className="row list-unstyled text-secondary">
          {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Api Integration", "Redux"].map((tech) => (
            <li key={tech} className="col-6 mb-1">• {tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
