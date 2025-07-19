import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container-fluid">
        <Link href="#" className="navbar-brand fw-bold text-accent me-4" style={{fontSize: '1.5rem'}}>Chanakya</Link>
        <div>
          <Link href="#" className="nav-link d-inline-block px-3 nav-hover">Home</Link>
          <Link href="#about" className="nav-link d-inline-block px-3 nav-hover">About</Link>
          <Link href="#projects" className="nav-link d-inline-block px-3 nav-hover">Projects</Link>
          <Link href="#contact" className="nav-link d-inline-block px-3 nav-hover">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
