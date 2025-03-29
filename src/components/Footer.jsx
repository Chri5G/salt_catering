import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-neutral-900 text-white pb-10'>
      <p className='text-center'>Powered by <a href='https://www.kingdom-code.com'>Kingdom Code</a></p>
      
      {/* Social Media Section */}
      <div className='flex justify-center mt-5 gap-5'>
        <motion.a href='https://facebook.com'  target='blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale:0.95 }}
        > <FaFacebook size={30} /></motion.a>
        <motion.a href='https://instagram.com' target='blank'
          whileHover={{ scale:1.1 }}
          whileTap={{ scale:0.95 }}
        > <FaInstagram size={30} /></motion.a>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 px-5 md:pt-5 md:px-20 gap-5'>
        <div>
          <a href='/'><img src="/imgs/logo-trans.png" alt="logo" className="w-1/2 mx-auto"></img></a>
          <div className='flex flex-col mx-auto justify-center items-center gap-3'>
            <motion.a href='tel:2102888582' className='flex gap-2'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
            ><FaPhone className='my-auto'/>(210)-288-8582</motion.a>
            <motion.a href="mailto:" className='flex gap-2'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
            ><FaEnvelope className='my-auto'/>email</motion.a>
          </div>
        </div>
        <div className='text-center my-auto'>
          <p className='font-bold mb-5'>Catering</p>
          <ul className='flex flex-col gap-5'>
            <li>
              <motion.a href='/catering'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
              className='inline-block'
              >
                Menu
              </motion.a>
            </li>
            <li><motion.a href='/catering/past_events'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
              className='inline-block'
            >Past Events</motion.a></li>
          </ul>
          <div className='text-center mt-5'>
            <a href='/monthly_specials'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
              className='inline-block'
            ><motion.p className='font-bold'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
            >Monthly Specials</motion.p></a>
          </div>
        </div>
        <div className='text-center my-auto'>
          <p className='font-bold mb-5'>Bakery</p>
          <ul className='flex flex-col gap-5'>
            <li><motion.a href='/bakery'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
              className='inline-block'
            >Menu</motion.a></li>
            <li><motion.a href='/bakery/sourdough'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
              className='inline-block'
            >Sourdough</motion.a></li>
          </ul>
          <div className='text-center mt-5'>
            <a href='/contact_us'><motion.p className='font-bold inline-block'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.95 }}
            >Contact Us</motion.p></a>
          </div>
        </div>
      </div>
    </div>
  )
}
