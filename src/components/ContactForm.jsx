import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold text-center underline  decoration-blue-700">
          Get in Touch
        </h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 mb-4 border rounded"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
