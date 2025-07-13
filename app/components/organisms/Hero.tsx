export default function Hero() {
  return (
    <section className="container-fluid min-vh-100 d-flex align-items-center bg-dark text-white px-4 px-md-5">
      <div className="row w-100 align-items-center">
        {/* Left Column - Text */}
        <div className="col-md-6">
          <p className="text-info small fst-italic mb-2">Hi, my name is</p>
          <h1 className="display-4 fw-bold mb-2">Chanakya Sharma.</h1>

          <p className="text-secondary mb-4" style={{ maxWidth: "100%" }}>
            I’m a developer passionate about crafting accessible, user interfaces that blend thoughtful
            design with robust engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are meticulously built for
            performance and usability. Currently, I'm a Front-End Engineer at Cogneesol, specializing in
            accessibility. I contribute to the creation and maintenance of UI components that power
            Apnikheti's frontend, ensuring our platform meets web accessibility standards and best
            practices to deliver an inclusive user experience.
          </p>

          <a href="#projects" className="btn btn-outline-info btn-lg">
            Check out my work
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/porfolio.jpeg" // ✅ Place your image in /public folder
            alt="Chanakya Sharma"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
