const techStack = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
];

export default function TechStackList() {
  return (
    <ul className="row list-unstyled text-secondary">
      {techStack.map((tech) => (
        <li key={tech} className="col-6 mb-1">• {tech}</li>
      ))}
    </ul>
  );
}
