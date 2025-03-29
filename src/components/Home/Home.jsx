import React from 'react'
import ImageSwitcher from './ImageSwitcher'
import InfiniteCarousel from './InfiniteCarousel'
import { motion } from 'framer-motion'
import { containerVariants, yVariants } from  '../Variants'

const images = [
  "/imgs/logo_black.jpg",
  "/imgs/logo_white.jpg"
]

const carouselImages = [
  "/imgs/carousel/sourdough-1.jpg",
  "/imgs/carousel/catering-1.jpg",
  "/imgs/carousel/sourdough-2.avif",
  "/imgs/carousel/catering-2.jpg",
  "/imgs/carousel/sourdough-3.jpg",
  "/imgs/carousel/catering-3.jpg",
  "/imgs/carousel/sourdough-4.jpg",
  "/imgs/carousel/catering-4.webp",
  "/imgs/carousel/sourdough-5.jpg",
  "/imgs/carousel/catering-5.jpg"
]

export default function Home() {
  return (
    <motion.div className='bg-neutral-900 text-white text-center'
      variants={ containerVariants} 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div>
        <ImageSwitcher images={images}/>
      </div>

      {/* Family Buisness Makes a Difference */}
      <motion.div className='py-20 px-5 md:px-20 mw-3/4'
        variants={ yVariants}
      >
        <p className='font-extrabold text-3xl'>Family Business Makes a Difference</p>
        <p className='text-5xl mt-5'>Let Us Show You Why!</p>
        <hr className='w-5/6 mx-auto mt-5 border-yellow-600'/>
        <div className='mt-10 rounded-lg border-2 border-yellow-600 p-5'>
          <p>You will see and taste the difference with our selections here at Salt Custom Catering! We pride ourselves on preparing mouthwatering dishes made fresh from scratch each and every day.</p>
          <p className="mt-3">Salt Custom Catering is family owned and operated. We have been Catering to San Antonio and the surrounding areas for over 26 years since 1998. Our culinary style of gourmet cuisine fused together with our impeccable presentation is our signature and our "family brand."</p>
          <p className='mt-3'>Having been selected numerous times as San Antonio's top caterer, we take great pride in serving our community. You will be pleased that you choose Salt Custom Catering.</p>
          <p className='mt-3'>We are looking forward to serving you soon!</p>
          <p className='mt-5'>-Salt Custom Catering</p>
          <button className='mt-5 bg-transparent border-2 border-yellow-600 rounded-none'>About us</button>
        </div>
      </motion.div>

      {/* 2 Picture section with links */}
      <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-20'
        variants={ containerVariants} 
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
      >
        <motion.div className="relative w-full h-96 bg-cover bg-center text-white flex items-center justify-center rounded-xl" 
          style={{backgroundImage: "url('/imgs/catering/1.avif')"}}
          variants={ yVariants }
        >          
        <a href='/catering'>
          <p className="text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Catering</p>
        </a>
        </motion.div>
        <motion.div className="relative w-full h-96 bg-cover bg-center text-white flex items-center justify-center rounded-xl" 
          style={{'backgroundImage': "url('/imgs/sourdough/1.jpeg')"}}
          variants={ yVariants }
        >
        <a href='/bakery'>
          <p className="text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Bakery</p>
        </a>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <div>
        <InfiniteCarousel images={carouselImages}/>
      </div>

      {/* 3 long columns with img and text */}
      <motion.div className='bg-black grid grid-cols-1 md:grid-cols-3 pt-10 gap-8 px-10'
        variants={ containerVariants} 
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='bg-neutral-900 flex flex-col border-2 border-transparent rounded-xl p-5'
          variants={ yVariants }
        >
          <div className='h-48 items-start rounded-lg' 
          style={{backgroundImage: "url('/imgs/logo_black.jpg')", backgroundPosition: 'center', backgroundSize: 'cover',}}>
          </div>
          <p className='mt-5 text-2xl'>Private & Social Events</p>
          <p className='mt-5 uppercase text-sm'>If you have a reason to entertain... We have a reason to celebrate! We know how to do that</p>
          <p className='mt-5 text-sm'>Whatever the occasion, from Baby Showers and Birthdays, Graduations and Wedding Festivities to Celebration of Life and everything in between, we will make it delicious and stress free for YOU.</p>
          <button className='mx-auto mt-10 bg-transparent border-2 border-yellow-600 rounded-none'>Learn More</button>
        </motion.div>
        <motion.div className='bg-neutral-900 flex flex-col border-2 border-transparent rounded-xl p-5'
          variants={ yVariants }
        >
          <div className='h-48 items-start rounded-lg' 
          style={{backgroundImage: "url('/imgs/logo_black.jpg')", backgroundPosition: 'center', backgroundSize: 'cover',}}>
          </div>
          <p className='mt-5 text-2xl'>Private & Social Events</p>
          <p className='mt-5 uppercase text-sm'>If you have a reason to entertain... We have a reason to celebrate! We know how to do that</p>
          <p className='mt-5 text-sm'>Whatever the occasion, from Baby Showers and Birthdays, Graduations and Wedding Festivities to Celebration of Life and everything in between, we will make it delicious and stress free for YOU.</p>
          <button className='mx-auto mt-10 bg-transparent border-2 border-yellow-600 rounded-none'>Learn More</button>
        </motion.div>
        <motion.div className='bg-neutral-900 flex flex-col border-2 border-transparent rounded-xl p-5'
          variants={ yVariants }
        >
          <div className='h-48 items-start rounded-lg' 
          style={{backgroundImage: "url('/imgs/logo_black.jpg')", backgroundPosition: 'center', backgroundSize: 'cover',}}>
          </div>
          <p className='mt-5 text-2xl'>Private & Social Events</p>
          <p className='mt-5 uppercase text-sm'>If you have a reason to entertain... We have a reason to celebrate! We know how to do that</p>
          <p className='mt-5 text-sm'>Whatever the occasion, from Baby Showers and Birthdays, Graduations and Wedding Festivities to Celebration of Life and everything in between, we will make it delicious and stress free for YOU.</p>
          <button className='mx-auto mt-10 bg-transparent border-2 border-yellow-600 rounded-none'>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
