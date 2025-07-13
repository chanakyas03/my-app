import Image from "next/image";

export default function Hero() {
  return (
   <section className="min-vh-100 pt-5 d-flex flex-column flex-md-row align-items-center bg-dark text-white px-4 px-md-5">
      {/* Left Column - Text */}
      <div className="w-100 w-md-50 mb-4 mb-md-0 pe-md-5">
        <p className="text-info small fst-italic mb-2">Hi, my name is</p>
        <h1 className="display-4 fw-bold mb-2">Chanakya Sharma.</h1>

        <p className="text-secondary mb-4">
          I&apos;m a developer passionate about crafting accessible, user interfaces that blend thoughtful
          design with robust engineering. My favorite work lies at the intersection of design and
          development, creating experiences that not only look great but are meticulously built for
          performance and usability. Currently, I&apos;m a Front-End Engineer at Cogneesol, specializing in
          accessibility. I contribute to the creation and maintenance of UI components that power
          Apnikheti&apos;s frontend, ensuring our platform meets web accessibility standards and best
          practices to deliver an inclusive user experience.
        </p>

        <a href="#projects" className="btn btn-outline-info btn-lg">
          Check out my work
        </a>
      </div>

      {/* Right Column - Image */}
      <div className="w-100 w-md-50 d-flex justify-content-center">
        <Image
          src="/porfolio.jpeg"
          alt="Chanakya Sharma"
          width={300}
          height={300}
          className="img-fluid rounded-circle"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
