"use client"
import React from "react";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "bi bi-react", color: "#61dafb" },
      { name: "Next.js", icon: "bi bi-lightning-charge-fill", color: "#fff" },
      { name: "TypeScript", icon: "bi bi-filetype-tsx", color: "#3178c6" },
      { name: "Redux", icon: "bi bi-diagram-3-fill", color: "#764abc" },
      { name: "HTML5", icon: "bi bi-filetype-html", color: "#e34c26" },
      { name: "CSS3", icon: "bi bi-filetype-css", color: "#264de4" },
      { name: "Bootstrap", icon: "bi bi-bootstrap-fill", color: "#7952b3" },
      { name: "Ant Design", icon: "bi bi-layout-text-window-reverse", color: "#1890ff" },
      { name: "React Flow", icon: "bi bi-diagram-3", color: "#00bcd4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "bi bi-node-plus-fill", color: "#3c873a" },
      { name: "REST API", icon: "bi bi-plug-fill", color: "#f1c40f" },
      { name: "GraphQL", icon: "bi bi-graph-up-arrow", color: "#e535ab" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: "bi bi-git", color: "#f05032" },
      { name: "GitHub", icon: "bi bi-github", color: "#fff" },
      { name: "Vercel", icon: "bi bi-cloud-fill", color: "#fff" },
      { name: "Agile", icon: "bi bi-kanban-fill", color: "#27ae60" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <div className="bg-section rounded-4 p-4 h-100">
      <p className="text-accent fw-semibold mb-3">Tech Stack</p>
      {techStack.map((cat) => (
        <div key={cat.category} className="mb-3">
          <div className="fw-bold text-secondary mb-2" style={{fontSize: '1.05rem'}}>{cat.category}</div>
          <div className="d-flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item.name}
                className="tech-badge d-flex align-items-center gap-1 px-3 py-2 rounded shadow-sm"
                style={{background: "rgba(36, 54, 74, 0.7)", color: item.color, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.15s'}}
                title={item.name}
                tabIndex={0}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                onFocus={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onBlur={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <i className={item.icon + " me-2"} style={{color: item.color, fontSize: '1.3em'}}></i>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 