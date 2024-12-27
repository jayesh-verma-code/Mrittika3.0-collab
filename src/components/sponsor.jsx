import React from 'react'
import './sponsor.css';

function sponsor() {
  return (
    <div className='w-full h-screen z-10'> 
      <div className='w-full  bg-[#F1F1F1] px-20 mt-[100px] mb-[150px]'>
        <h1 className='font-["Bebas_Neue"] text-[110px] leading-[100px] text-[#212121] font-semibold mb-[20px]'>sponsor's</h1>
        <div className='logos relative'>
        <div className='logos-slide flex gap-10'>
            <img src="./Sponsor1.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor2.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor3.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor4.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor5.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor6.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor7.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor8.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor9.png" alt="" className='h-[100px] w-[160px]'/>
        </div>
        <div className='second logos-slide flex gap-10 relative'>
            <img src="./Sponsor1.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor2.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor3.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor4.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor5.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor6.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor7.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor8.png" alt="" className='h-[100px] w-[160px]'/>
            <img src="./Sponsor9.png" alt="" className='h-[100px] w-[160px]'/>
        </div>
        </div>
        
    </div>
    <div className='w-full border-t-[0.5px] border-[#212121]'></div>
    <div className='w-full px-20 flex justify-between mt-[30px]'>
      <div>
        <p className='text-2xl font-["Inter"] tracking-tight text-[#212121]'>Proudly announching Mrittika Title Sponsors</p>
        <ul className='mt-[20px] '>
          <li className='mb-[6px]'>Mahakoshal Refracories Pvt Lmt</li>
          <li className='mb-[6px]'>TRL Krosaki Refractories Pvt Lmt</li>
          <li className='mb-[6px]'>Sino Global Pvt Lmt</li>
          <li className='mb-[6px]'>Aarya Metallurgicals</li>
          <li className='mb-[6px]'>Aditya Birla Hindalco Pvt Lmt</li>
        </ul>
      </div>
      <div>
        <p className='text-2xl font-["Inter"] tracking-tight text-[#212121]'>Proudly announching Mrittika Gold & Silver Sponsors</p>
        <ul className='mt-[20px] '>
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
    <div className='w-full px-20 flex justify-between mt-[120px]'>
        <p className='font-["Bebas_Neue"] text-[#212121] text-2xl'>InCerS NITR</p>
        <p className='text-[15px] text-[#ADADAD]'>@Mrittika3.0 2025-26 <u>Right Reserve</u></p>
        <p className='text-[15px] text-[#ADADAD]'>Design by InCerS WebD Team</p>
      </div>
    </div>
  )
}

export default sponsor