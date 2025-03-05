import { useState } from "react";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <button
        onClick={toggleMode}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center">Your Name</h1>
        <p className="text-center text-lg">Web Developer | IT Specialist</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p>A brief introduction about your skills and experience.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="list-disc pl-5">
            <li>Job 1 - Company - Year</li>
            <li>Job 2 - Company - Year</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <p>Your Degree - University - Year</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">yourusername</a></p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
