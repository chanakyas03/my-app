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
      <h1 className="display-4 fw-bold mb-2 hero-name-animate text-accent">Chanakya Sharma</h1>
      <h2 className="h5 text-secondary mb-4">React JS Developer</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <a href="https://github.com/chanakya-sharma" className="btn btn-outline-info rounded-pill px-3" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github me-2"></i>GitHub
        </a>
        <a href="/Chanakya-resume.pdf" download="Chanakya-resume.pdf" className="btn btn-outline-info rounded-pill px-3">
          <i className="bi bi-file-earmark-person me-2"></i>Resume
        </a>
        <a href="mailto:chanakyasharma31@gmail.com" className="btn btn-outline-info rounded-pill px-3">
          <i className="bi bi-envelope-fill me-2"></i>Email
        </a>
      </div>
    </section>
  );
}
