import TechStackSection from "./TechStackSection";

export default function About() {
  return (
    <section id="about" className="container py-5 fade-in">
      <h2 className="h2 section-title-accent mb-5 text-center">About Me</h2>
      <div className="row align-items-center justify-content-center">
      <p className="text-secondary fs-5">
            Hello! I&apos;m Chanakya Sharma, a web developer with a passion for crafting beautiful and performant digital experiences. I enjoy solving problems with clean, scalable code.
            I&apos;m currently focused on learning deeper frontend architecture, building personal tools, and contributing to open source.
          </p>
      </div>
      <div className="row align-items-center justify-content-center">
        {/* <div className="col-md-7 mb-4 mb-md-0">
          <p className="text-secondary fs-5">
            Hello! I&apos;m Chanakya Sharma, a web developer with a passion for crafting beautiful and performant digital experiences. I enjoy solving problems with clean, scalable code.<br/><br/>
            I&apos;m currently focused on learning deeper frontend architecture, building personal tools, and contributing to open source.
          </p>
        </div> */}
       
          <TechStackSection />
       
      </div>
    </section>
  );
}
