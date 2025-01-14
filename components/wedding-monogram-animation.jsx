'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WeddingMonogramAnimation = ({ name = 'PAUL & RICA', date = '01.17.2025', delay = 0.5 }) => {
  const [key, setKey] = useState(0); // Unique key for the animation

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Increment key to reset the component
    }, 15000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        key={key}
        className="text-center p-8 rounded-lg bg-[#FFF9F5]/70 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay }}
      >
        <motion.div key={key}
          className="flex flex-col text-[180px] font-sans text-[#EED6A8] relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          <motion.span key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + 1 + 0 * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              className="-ml-[100px] -mt-[40px] inline-block"
            >
              P
          </motion.span>
          <motion.span key={key}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + 1 + 1 * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              className="ml-[40px] -mt-[160px] -mb-[60px] inline-block"
            >
              R
          </motion.span>
          <motion.div key={key}
            className="absolute -top-6 -left-4 -right-4 h-0.5 bg-[#E2C697]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: delay + 1.5 }}
          />
          <motion.div key={key}
            className="absolute -bottom-6 -left-4 -right-4 h-0.5 bg-[#E2C697]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: delay + 1.5 }}
          />
        </motion.div>
        <motion.div key={key}
          className="text-3xl font-mono text-[#EED6A8] leading-tight mt-10 -mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: delay + 2 }}
        >
          <p className='m-0 p-0'>{name}</p>
          <p className='m-0 p-0'>{date}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WeddingMonogramAnimation

