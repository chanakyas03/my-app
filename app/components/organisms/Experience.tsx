import React from 'react'

const experiences = [
  {
    role: "React JS Developer",
    company: "Cogneesol Pvt. Limited",
    location: "Mohali, India",
    period: "Feb 2023 – Present",
    details: [
      "Built Agriculture Management System with vendor/admin panels and e-commerce backend integration.",
      "Implemented drag-and-drop Automation Flows with React Flow and seamless API integration."
    ]
  },
  {
    role: "React JS Intern",
    company: "Cogneesol Pvt. Limited",
    location: "Mohali, India",
    period: "Aug 2022 – Jan 2023",
    details: [
      "Converted static HTML into reusable React components.",
      "Worked with React Hooks, Redux, Apollo Client (GraphQL), and Axios (REST).",
      "Learned React Js state mangement and Redux Concepts."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container py-5 fade-in">
      <h2 className="h2 section-title-accent mb-5 text-center">Professional Experience</h2>
      <div className="row justify-content-center g-4">
        {experiences.map((exp) => (
          <div key={exp.role} className="col-md-6 d-flex">
            <div className="bg-section rounded-4 shadow-sm p-4 flex-fill d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="mb-1 text-accent fw-bold">{exp.role}</h5>
                <div className="mb-2 text-accent small fw-semibold">{exp.company} • {exp.location}</div>
                <div className="mb-2 text-secondary small">{exp.period}</div>
                <ul className="ps-3 mb-0">
                  {exp.details.map((item, idx) => (
                    <li key={idx} className="mb-1 text-secondary">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;