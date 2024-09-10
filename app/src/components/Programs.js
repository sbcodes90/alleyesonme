import React from 'react'
import beeIcon from "../images/bee.png";
import honeycomb from "../images/honey-comb.png";
import miniHive from "../images/sweet.png";
import bee from "../images/laugh.png";
import { HashLink } from 'react-router-hash-link';

export default function Programs() {
  return (
    <section>
    <div className="bg-yellow-100 text-center p-20 lg:px-40 lg:py-40">
      <div className=" text-xl lg:text-3xl font-black pb-20">Programs</div>
      <div className="grid lg:grid-cols-4 gap-5 justify-center	">
       <HashLink smooth to="/program-info#tutoring"> <div className="bg-yellow-500 hover:bg-teal-200 hover:border-[10px] hover:border-black p-20 rounded-3xl font-bold text-2xl">
          <div><img src={beeIcon} alt="beeIcon" className="pb-2" /></div>
          One-on-One Tutoring</div></HashLink>
        <HashLink smooth to="/program-info#parent-bootcamps" className="bg-yellow-500 hover:bg-teal-200 hover:border-[10px] hover:border-black p-20 rounded-3xl font-bold text-2xl">
          <div><img src={honeycomb} alt="beeIcon" className="pb-2" /></div>
          Parent Bootcamps</HashLink>
          <HashLink smooth to="/program-info#mathematics-in-the-park" className="bg-yellow-500 hover:bg-teal-200 p-20 hover:border-[10px] hover:border-black rounded-3xl font-bold text-2xl">
          <div><img src={miniHive} alt="beeIcon" className="pb-2" /></div>
          Mathematics in the Park</HashLink>
        <HashLink smooth to="/program-info#math-toolbox" className="bg-yellow-500 hover:bg-teal-200 p-20 hover:border-[10px] hover:border-black rounded-3xl font-bold text-2xl">
          <div><img src={bee} alt="beeIcon" className="pb-2" /></div>

          Mathematician Toolbox </HashLink>
      </div>
    </div>
  </section>
  )
}
