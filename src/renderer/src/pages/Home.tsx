import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-12">
      {/* Main Section */}
      <section className="text-center">
        <h1 className="text-8xl font-extrabold text-blue-800 mb-4">Welcome to Our Home Page</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          We are thrilled to have you here! Explore our platform to discover exciting features,
          services, and more.
        </p>
        <div className="space-x-6">
          <a
            href="/about"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Learn More About Us
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-semibold text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
