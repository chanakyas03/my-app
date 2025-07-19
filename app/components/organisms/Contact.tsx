export default function Contact() {
  return (
    <section id="contact" className="container py-5 fade-in">
      <div className="mb-5 text-center">
        <div style={{height: '6px', width: 80, margin: '0 auto 1.5rem auto', borderRadius: 3, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))'}}></div>
        <h2 className="h2 section-title-accent mb-3">Get in Touch</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="contact-bg rounded-4 p-4 shadow-sm position-relative overflow-hidden">
            {/* Optional: Add a subtle icon/illustration */}
            <div style={{position: 'absolute', top: -30, right: -30, opacity: 0.08, fontSize: 160, pointerEvents: 'none'}}>
              <i className="bi bi-envelope-fill text-accent2"></i>
            </div>
            <p className="text-secondary text-center mb-4 position-relative" style={{zIndex: 1}}>
              Have a question, idea, or opportunity? Feel free to reach out via this form or email me at
              <a href="mailto:chanakyasharma31@gmail.com" className="text-accent ms-1">chanakyasharma31@gmail.com</a>.
            </p>
            <form className="mt-2 position-relative" style={{zIndex: 1}}>
              <div className="mb-3">
                <label className="form-label text-white">Name</label>
                <input type="text" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input type="email" className="form-control" placeholder="Your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Message</label>
                <textarea className="form-control" rows={5} placeholder="Your message..." required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-outline-info btn-lg rounded-pill">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
