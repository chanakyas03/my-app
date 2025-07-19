"use client"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "YOUR_USER_ID"
      )
      .then(
        () => {
          setStatus("success");
          ((formRef.current as unknown) as HTMLFormElement).reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="container py-5 fade-in">
      <div className="mb-5 text-center">
        <div style={{height: '6px', width: 80, margin: '0 auto 1.5rem auto', borderRadius: 3, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))'}}></div>
        <h2 className="h2 section-title-accent mb-3">Get in Touch</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="contact-bg rounded-4 p-4 shadow-sm position-relative overflow-hidden">
            <div style={{position: 'absolute', top: -30, right: -30, opacity: 0.08, fontSize: 160, pointerEvents: 'none'}}>
              <i className="bi bi-envelope-fill text-accent2"></i>
            </div>
            <p className="text-secondary text-center mb-4 position-relative" style={{zIndex: 1}}>
              Have a question, idea, or opportunity? Feel free to reach out via this form or email me at
              <a href="mailto:chanakyasharma31@gmail.com" className="text-accent ms-1">chanakyasharma31@gmail.com</a>.
            </p>
            <form ref={formRef} className="mt-2 position-relative" style={{zIndex: 1}} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label text-white">Name</label>
                <input type="text" name="user_name" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input type="email" name="user_email" className="form-control" placeholder="Your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Message</label>
                <textarea name="message" className="form-control" rows={5} placeholder="Your message..." required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-outline-info btn-lg rounded-pill">Send Message</button>
              </div>
              {status === "success" && (
                <div className="alert alert-success mt-3" role="alert">
                  Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3" role="alert">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
