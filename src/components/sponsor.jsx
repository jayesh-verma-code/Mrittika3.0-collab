import React from 'react'
import './sponsor.css';
import sponsor1 from '../assets/Sponsor1.png';
import sponsor2 from '../assets/Sponsor2.png';
import sponsor3 from '../assets/Sponsor3.png';
import sponsor4 from '../assets/Sponsor4.png';
import sponsor5 from '../assets/Sponsor5.png';
import sponsor6 from '../assets/Sponsor6.png';
import sponsor7 from '../assets/Sponsor7.png';
import sponsor8 from '../assets/Sponsor8.png';
import sponsor9 from '../assets/Sponsor9.png';

function sponsor() {
  return (
    <div className='w-full  z-10'> 
      <div className='w-full  bg-[#F1F1F1] px-20 mt-[100px] mb-[150px]'>
        <h1 className='font-["Bebas_Neue"] text-[110px] leading-[100px] text-[#212121] font-semibold mb-[20px]'>sponsor's</h1>
        <div className='logos relative'>
        <div className='logos-slide gap-10 flex'>
            <img src={sponsor1} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor2} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor3} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor4} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor5} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor6} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor7} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor8} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor9} alt="" className='h-[100px] w-[160px]'/>
        </div>
        <div className='second logos-slide flex gap-10 relative'>
            <img src={sponsor1} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor2} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor3} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor4} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor5} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor6} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor7} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor8} alt="" className='h-[100px] w-[160px]'/>
            <img src={sponsor9} alt="" className='h-[100px] w-[160px]'/>
        </div>
        </div>
        
    </div>
    <div className='w-full border-t-[0.5px] border-[#212121]'></div>
    <div className='w-full px-20 lg:flex lg:justify-between mt-[30px]'>
      <div>
        <p className='text-2xl font-["Inter"] tracking-tight text-[#212121]'>Proudly announching Mrittika Title Sponsors</p>
        <ul className='mt-[20px] mb-[30px] lg:mb-[0]'>
          <li className='mb-[6px]'>Mahakoshal Refracories Pvt Lmt</li>
          <li className='mb-[6px]'>TRL Krosaki Refractories Pvt Lmt</li>
          <li className='mb-[6px]'>Sino Global Pvt Lmt</li>
          <li className='mb-[6px]'>Aarya Metallurgicals</li>
          <li className='mb-[6px]'>Aditya Birla Hindalco Pvt Lmt</li>
        </ul>
      </div>
      <div>
        <p className='text-2xl font-["Inter"] tracking-tight text-[#212121]'>Proudly announching Mrittika Gold & Silver Sponsors</p>
        <ul className='mt-[20px] mb-[30px] lg:mb-[0]'>
          <li className='mb-[6px]'>Mahakoshal Refracories Pvt Lmt</li>
          <li className='mb-[6px]'>TRL Krosaki Refractories Pvt Lmt</li>
          <li className='mb-[6px]'>Sino Global Pvt Lmt</li>
          <li className='mb-[6px]'>Aarya Metallurgicals</li>
          <li className='mb-[6px]'>Aditya Birla Hindalco Pvt Lmt</li>
        </ul>
      </div>
      <div>
        <button className='moreBtn h-[50px] w-[200px] text-1xl border-[1px] border-[#212121] rounded-[50px]'><div className='flex justify-center'>More Details <p className='px-[15px] -rotate-45'><i class="fa-sharp fa-solid fa-arrow-right"></i></p></div></button>
      </div>
      
    </div>
    <div className='w-full px-20 flex justify-between  mt-[80px] lg:mt-[120px]'>
        <p className='font-["Bebas_Neue"] text-[#212121] text-2xl'>InCerS NITR</p>
        <p className='text-[15px] text-[#ADADAD] hidden md:block lg:block'>@Mrittika3.0 2025-26 <u>Right Reserve</u></p>
        <p className='text-[15px] text-[#ADADAD]'>Developed by Jayesh Verma[NIT R]</p>
      </div>
    </div>
  )
}

export default sponsor