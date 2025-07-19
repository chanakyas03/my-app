import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: <><i className="bi bi-house-door-fill me-1"></i>Home</>, href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "hero";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm bg-section" style={{zIndex: 100}}>
      <div className="container-fluid">
        <Link href="#hero" className="navbar-brand fw-bold text-accent me-4" style={{fontSize: '1.5rem'}}>Chanakya</Link>
        <div>
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={sec.href}
              className={`nav-link d-inline-block px-3 nav-hover${active === sec.id ? " text-accent fw-bold" : ""}`}
              style={{transition: 'color 0.2s'}}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
