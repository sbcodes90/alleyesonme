import React from 'react'
import beeIcon from "../images/bee.png";
import honeycomb from "../images/honey-comb.png";
import miniHive from "../images/sweet.png";
import bee from "../images/laugh.png";
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <section>
    <div className="bg-yellow-100 text-center p-20 lg:px-40 lg:py-40">
      <div className=" text-xl lg:text-3xl font-black pb-20">Programs</div>
      <div className="grid lg:grid-cols-4 gap-5 justify-center	">
        <div className="bg-yellow-500 hover:bg-teal-200 hover:border-[10px] hover:border-black p-20 rounded-3xl font-bold text-2xl">
          <div><img src={beeIcon} alt="beeIcon" className="pb-2" /></div>
          One-on-One Tutoring</div>
        <div className="bg-yellow-500 hover:bg-teal-200 hover:border-[10px] hover:border-black p-20 rounded-3xl font-bold text-2xl">
          <div><img src={honeycomb} alt="beeIcon" className="pb-2" /></div>
          Parent Bootcamp</div>
        <div className="bg-yellow-500 hover:bg-teal-200 p-20 hover:border-[10px] hover:border-black rounded-3xl font-bold text-2xl">
          <div><img src={miniHive} alt="beeIcon" className="pb-2" /></div>
          Mathematics in the Park  </div>
        <div className="bg-yellow-500 hover:bg-teal-200 p-20 hover:border-[10px] hover:border-black rounded-3xl font-bold text-2xl">
          <div><img src={bee} alt="beeIcon" className="pb-2" /></div>

          Mathematician Toolbox </div>
      </div>
    </div>
  </section>
  )
}
