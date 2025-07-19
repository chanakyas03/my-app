import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center hero-section px-4 fade-in">
      <div className="mb-4">
        <Image
          src="/porfolio.jpeg"
          alt="Chanakya Sharma"
          width={180}
          height={180}
          className="img-fluid rounded-circle profile-glow border border-4 border-accent mb-3"
          style={{ maxWidth: "180px", height: "180px", objectFit: "cover" }}
        />
      </div>
      <div className="mb-2">
        <h1 className="display-6 fw-bold mb-1 hero-name-animate text-accent" >Chanakya Sharma</h1>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-2" style={{fontSize: '1.1rem'}}>
          <span className="text-secondary"><i className="bi bi-geo-alt-fill me-1"></i>Punjab, India</span>
          <span className="text-muted d-none d-md-inline">|</span>
          <a href="tel:+917719489251" className="text-secondary text-decoration-none"><i className="bi bi-telephone-fill me-1"></i>+91 7719489251</a>
          <span className="text-muted d-none d-md-inline">|</span>
          <a href="mailto:chanakyasharma31@gmail.com" className="text-secondary text-decoration-none"><i className="bi bi-envelope-fill me-1"></i>chanakyasharma31@gmail.com</a>
        </div>
      </div>
      <h2 className="h4 text-accent mb-3">React JS Developer</h2>
      <p className="lead text-secondary mb-4" style={{maxWidth: 600, margin: "0 auto"}}>
        I build accessible, performant, and beautiful web applications. Currently Front-End Engineer at Cogneesol, passionate about UI/UX and modern web technologies.
      </p>
      <a href="#projects" className="btn btn-outline-info btn-lg rounded-pill px-4 shadow-sm">
        View My Work
      </a>
    </section>
  );
}
