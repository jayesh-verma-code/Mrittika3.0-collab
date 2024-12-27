import React from 'react';
import Landing from './components/landing';
import Whatapp from './components/whatapp';
import Marquee from './components/marquee';
import PictureSection from './components/pictureSection';
import Sponsor from './components/sponsor';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1]'>
      <Whatapp />
      <Landing />
      <Marquee/>
      <PictureSection/>
      <Sponsor/>
    </div>
  )
}

export default App