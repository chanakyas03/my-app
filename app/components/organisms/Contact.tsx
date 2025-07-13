export default function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="h2 border-bottom pb-2 mb-4">Get in Touch</h2>
      <p className="text-secondary">
        Have a question, idea, or opportunity? Feel free to reach out via this form or email me at
        <a href="mailto:chanakya@example.com" className="text-info ms-1">chanakyasharma31@gmail.com</a>.
      </p>
      <form className="mt-4">
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
        <button type="submit" className="btn btn-info text-white">Send Message</button>
      </form>
    </section>
  );
}
