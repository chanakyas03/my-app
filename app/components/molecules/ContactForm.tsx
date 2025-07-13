import Input from "../atoms/Input"; // Make sure this uses Bootstrap's form-control class

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! (This is just a placeholder)");
      }}
    >
      <div className="mb-3">
        <label className="form-label text-white">Name</label>
        <Input type="text" placeholder="Your name" required />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Email</label>
        <Input type="email" placeholder="Your email" required />
      </div>
      <div className="mb-3">
        <label className="form-label text-white">Message</label>
        <textarea
          rows={5}
          required
          placeholder="Your message..."
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info text-white">
        Send Message
      </button>
    </form>
  );
}
