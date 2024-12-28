import { motion } from 'framer-motion'
import React from 'react'

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05"  className='w-full bg-[#004D43] py-[8vh] md:py-[6vh] lg:py-20 rounded-tl-3xl rounded-tr-3xl'>
        <div className=' text-white border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='leading-none font-["Bebas_Neue"] font-semibold text-[45vw] sm:text-[35vw] lg:text-[18vw]'>Welcome to Mrittika 3.0</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='leading-none font-["Bebas_Neue"] font-semibold text-[45vw] sm:text-[35vw] lg:text-[18vw]'>Welcome to Mrittika 3,0</motion.h1>
        </div>
    </div>
  )
}

export default marquee