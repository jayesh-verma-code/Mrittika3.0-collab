import React from 'react';
import { motion } from 'framer-motion';
import prof1 from '../assets/prof1.png';
import prof2 from '../assets/prof2.png';
import prof3 from '../assets/prof3.png';
import prof4 from '../assets/prof4.png';
import prof5 from '../assets/prof5.png';
import prof6 from '../assets/prof6.png';
import prof7 from '../assets/prof7.png';
import assoprof1 from '../assets/assoprof1.png';
import assoprof2 from '../assets/assoprof2.png';
import assoprof3 from '../assets/assoprof3.png';
import assiprof1 from '../assets/assiprof1.png';
import assiprof2 from '../assets/assiprof2.png';
import assiprof3 from '../assets/assiprof3.png';
import assiprof4 from '../assets/assiprof4.png';
import covernor1 from '../assets/convener1.png';
import covernor2 from '../assets/convener2.png';
import mem1 from '../assets/mem1.png';
import mem2 from '../assets/mem2.png';
import mem3 from '../assets/mem3.png';
import mem4 from '../assets/mem4.png';
import mem5 from '../assets/mem5.png';
import mem6 from '../assets/mem6.png';
import mem7 from '../assets/mem7.png';
import mem8 from '../assets/mem8.png';


function pictureSection() {
  
  return (
   <div data-scroll data-scroll-speed="-0.1" className='w-full bg-[#CDEA68] rounded-3xl z-1000'>
     <div className='w-full px-[8vw] py-[3vh] text-black px-20 py-20 z-1000'>
        <div className='outerDiv w-full flex-col lg:flex'>
            <div className='innerDiv1 lg:w-1/2 py-5'>
                <h1 className='font-["Inter"] text-3xl z-1000 w-[75vw] lg:w-[50vw] '>We express our gratitude to our <u>convener</u>, <u>professors</u>, <u>executive members</u>, and everyone who helped make Mrittika 2.0 a grand success. Your support and dedication turned it into an <u>award-winning event.</u></h1>
            </div>
            <div className='w-1/2 mt-[20px] md:mt-[0px] lg:mt-[0px] text-black px-5 text-center relative ml-[15vw] sm:ml-[5vw] '>
                 <h1 className='text-2xl font-["Inter"] font-semibold mb-[10px] text-[#212121] '>Convener</h1>
                 <div className='flex justify-center gap-[30px]'>
                    <img src={covernor1} className='h-[160px] w-[160px] bg-cover' alt="" />
                    <img src={covernor2} className='h-[160px] w-[160px] bg-cover' alt="" />
                 </div>
            </div>
        </div>
    </div>
    <div className=' border-t-[1px] border-zinc-700 mb-[20px]'></div>
    
    <div className='mt-[30px] w-full'>
      <div className='w-full h-[250px] text-center'>
        <h1 className='text-3xl text-[#212121] font-["Inter"] mb-[20px] font-semibold'>Our Proffesor</h1>
        <div className='wrapper w-full h-[180px] relative flex overflow-hidden'>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof1} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:1}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof2} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:2}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof3} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:3}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof4} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:4}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof5} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:5}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof6} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:6}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={prof7} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:7}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assoprof1} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:8}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assoprof2} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:9}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assoprof3} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:10}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assiprof1} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:11}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assiprof2} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:12}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assiprof3} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"95%"}} animate={{x:"-1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:13}} className='h-[180px] w-[180px] absolute right-[-180px] flex justify-center items-center'><img src={assiprof4} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
        </div>
      </div>

      <div className='w-full h-[250px] text-center'>
        <h1 className='text-3xl text-[#212121] font-["Inter"] mb-[20px] font-semibold'>Executive Members</h1>
        <div className='wrapper w-full h-[180px] relative flex overflow-hidden'>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem1} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:1}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem2} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:2}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem3} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:3}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem4} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:4}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem5} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:5}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem6} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:6}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem7} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:7}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem8} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:8}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem1} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:9}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem2} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:10}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem3} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:11}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem4} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:12}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem5} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
          <motion.div initial={{x:"-95%"}} animate={{x:"1726px"}} transition={{ease:"linear",repeat:Infinity,duration:10,delay:13}} className='h-[180px] w-[180px] absolute left-[-180px] flex justify-center items-center'><img src={mem6} className='h-[160px] w-[160px] bg-cover' alt="" /></motion.div>
        </div>
      </div>

    </div>
    <div className=' border-t-[1px] border-zinc-700 mb-[20px] mt-[50px] w-full h-[100px]'></div>
   </div>
  )
} 

export default pictureSection