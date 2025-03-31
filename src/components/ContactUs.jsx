// ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from "react-select";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: ''  // Clear error for the specific field
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, service: selectedOption });
    // Clear the error for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      ['service']: ''  // Clear error for the specific field
    }));
  };
  
  
  // const notify = () => {
  //   toast.success("Email has been sent successfully!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    setSending(true);

    // Validate name (required)
    if (!formData.name) {
      formErrors.name = 'Name is required.';
    }

    // Validate email (required and valid email format)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    // Validate service (required)
    if (!formData.service) {
      formErrors.service = 'Please select a service.';
    }

    // Validate message (required)
    if (!formData.message) {
      formErrors.message = 'Message is required.';
    }

    // Check if there are any errors
    if (Object.keys(formErrors).length === 0) {
      // Submit the form data (you can send this to the backend)
      // console.log('Form data submitted:', formData);
      try {
        // LOCAL
        // const response = await axios.post('http://localhost:443/api/send-email', formData);
        // PRODUCTION
        const response = await axios.post('https://www.gandjgutters.com/api/send-email', formData);
        console.log(response); 
        
        // Handle successful email send
        if (response.status == 200) {
          toast.success("Email sent successfully!", { position: "top-right" });
          await new Promise(resolve => setTimeout(resolve, 500));
          setFormData({ name: "", email: "", service: "", message: "" }); // Clear form
        } else {
          toast.error("Failed to send email. Please try again.", { position: "top-right" });
        }
      } catch (error) {
        console.log(error)
        toast.error("An error occurred. Please try again later.", { position: "top-right" });
      }

    } else {
      setErrors(formErrors);
    }
    setSending(false);
  };

  // Declare service options with numeric values (0-4)
  const serviceOptions = [
    { value: 'Catering', label: 'Catering' },
    { value: 'Bakery - Sourdough', label: 'Bakery - Sourdough' }
  ];

  return (
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className="w-full max-w-lg text-gray-50 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
              placeholder="Enter your name"
              whileFocus={{ scale: 1.025 }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <div>
            </div>
            <motion.input
              id="email"
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 "
              placeholder="Enter your email"
              whileFocus={{ scale: 1.025 }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <motion.div className="mb-4"
            animate={{ scale: isFocused ? 1.025 : 1 }}
          >
            <label className="block text-gray-700" htmlFor="service">
              Service Needed
            </label>
            <motion.div
              whileFocus={{ scale: 1.025 }}
            >
              <Select
                options={serviceOptions}
                value={formData.service}
                onChange={handleSelectChange}
                placeholder="Select a Service"
                className="w-full mt-2 focus:outline-none bg-white text-gray-700"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </motion.div>
            
            {errors.service && (
              <p className="text-red-500 text-sm mt-2">{errors.service}</p>
            )}
          </motion.div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
              placeholder="Enter your message"
              whileFocus={{ scale: 1.025 }}
            ></motion.textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sending ? 'Sending...' : 'Submit'}
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
