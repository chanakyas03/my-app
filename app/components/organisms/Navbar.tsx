import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div>
            <Link href="#" className="nav-link d-inline-block px-3">Home</Link>
          <Link href="#about" className="nav-link d-inline-block px-3">About</Link>
          <Link href="#projects" className="nav-link d-inline-block px-3">Projects</Link>
          <Link href="#contact" className="nav-link d-inline-block px-3">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
