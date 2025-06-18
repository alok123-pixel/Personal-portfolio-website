import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ypwqz9d",      
        "template_btyldne",      
        form.current,
        "cnNIFOrFOGLH8Pc4m"     
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // Clear form after sending
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white dark:bg-[#111827]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Let's Work Together
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-xl">
        Feel free to reach out via the form below or directly email me. I’ll get back to you ASAP!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-md hover:from-purple-500 hover:to-blue-600 transition-all duration-300"
        >
          Send Message ✉️
        </button>
      </form>
    </section>
  );
};

export default Contact;
