import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'

export const Contact = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <div class="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col ">
 <h1 className='text-orange-950 font-bold'>Get in Touch with SkillsEducation</h1>
 <p className='w-[70vw]'>At 
 <span className='bg-orange-950 text-orange-500 p-1'>SkillsEducation</span> we are always happy to hear from you! Whether you have questions about our courses, need support, or want to learn more about how we can help you achieve your educational goals, feel free to reach out. Our team is here to assist you every step of the way.</p>
  </div>
  <div className="bg-brown-900 text-orange-500 min-h-screen bg-orange-950">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-8">
              We work for the betterment of the society by training its people in the
              field of Information technology and other technologies. We keep a vision
              of making this company an opportunity hub to reduce the unemployment.
            </p>
            <h3 className="text-2xl font-bold mb-4">Regional Office</h3>
            <p className="mb-4">
              9am - 9pm Monday-Thursday and Friday is closed.
            </p>
            <p className="mb-4">
              Near Bay High School, Ahmed Pur Road, District Bahawalpur
            </p>
            <p className="mb-4">Skillseducation@gmail.com</p>
            <div className="relative w-full h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.947451521818!2d72.91452711465095!3d30.171558581858636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391d597217d72995%3A0x486d95438e9865f!2sNer%20Bay%20Farooqi%20Autos%20Hatheji%2C% 0x391d597217d72995%3A0x486d95438e9865f!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="bg-brown-600 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
