import React from 'react'

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-12">
      {/* About Us Section */}
      <section className="text-center mb-12">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto px-4">
          We are a passionate team dedicated to creating a seamless experience for our users. Our platform connects people with the resources they need to grow and succeed in their respective fields.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-4xl font-semibold text-blue-700 mb-4 text-left pl-4">Our Mission</h2>
        <p className="text-lg text-gray-600 px-4 pb-12">
        Our mission is to empower individuals and organizations by providing access to the best tools, resources, and community support. We strive to make a positive impact on society by fostering collaboration and innovation. <a href="mailto:support@example.com" className="text-blue-500 hover:underline">contact us</a>.
        </p>
      </section>


      {/* Terms Section */}
      <section className="mb-12 w-full">
        <h2 className="text-4xl font-semibold text-blue-700 mb-4 text-left pl-4">Our Terms</h2>
        <ul className="list-disc text-lg text-gray-600 pl-8">
          <li>We prioritize user privacy and data security.</li>
          <li>We ensure transparent and fair usage policies.</li>
          <li>We are committed to continuous improvement and feedback.</li>
          <li>Users must adhere to our community guidelines and respect others.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="w-full">
        <h2 className="text-4xl font-semibold text-blue-700 mb-4 text-left pl-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 px-4">
          If you have any questions or would like to learn more, don't hesitate to <a href="mailto:support@example.com" className="text-blue-500 hover:underline">contact us</a>.
        </p>
      </section>
    </div>
  )
}

export default About
