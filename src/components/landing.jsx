import React from 'react'

function landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] z-10'>
        <div className='textstructure px-[4vw] py-[15vh] relative'>
            <div className='masker font-["Bebas_Neue"] text-[110px] leading-[100px] text-[#212121] font-semibold '>
                <h1 className=''>Back with</h1>
                <h1 className=''>The Altimate Event</h1>
                <h1  className='flex '>Mrittika <h1 className='text-[#004D43]'>3.0</h1></h1>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-900 font-["Inter"] '>
          <div className='px-[4vw] flex justify-between text-[#212121] font-regular pt-[20px]'>
          <p><a href="">Visit Mrittika 1.0 @2019-20</a></p>
          <p><a href="">Visit Mrittika 2.0 @2023-24</a></p>
          <div className='scale-[0.9]'>
            <button className='moreBtn h-[50px] w-[200px] text-1xl border-[1px] border-[#212121] rounded-[50px]'><div className='flex justify-center'>More Details <p className='px-[15px] -rotate-45'><i class="fa-sharp fa-solid fa-arrow-right"></i></p></div></button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default landing