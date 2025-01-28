import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-12">
      {/* Contact Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We would love to hear from you! Feel free to reach out to us with any questions, feedback,
          or inquiries.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows={4}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold text-blue-700 mb-4">Our Contact Information</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> 1234 Street Name, City, Country, ZIP
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">
              contact@example.com
            </a>
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-3xl text-blue-600 hover:text-blue-700"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-3xl text-blue-400 hover:text-blue-500"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-3xl text-blue-700 hover:text-blue-800"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </section>
    </div>
  )
}

export default Contact
