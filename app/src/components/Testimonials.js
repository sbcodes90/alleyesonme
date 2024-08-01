import React from 'react'
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import t5 from "../images/t5.png";


function Testimonials() {
  return (
    <section className=" lg:p-40 flex flex-col items-center bg-cyan-200 py-20">
    <header className="text-center text-xl lg:text-3xl font-black pb-10">
        Testimonials
    </header>
    <section className=" flex flex-col lg:flex-row flex-wrap justify-center">
        <img src={t1} alt="testimonal" className="w-[500px]" />
        <img src={t3} alt="testimonal" className="w-[600px]" />
        <img src={t2} alt="testimonal" className="w-[600px] pt-10" />
        <img src={t4} alt="testimonal" className="w-[600px] pt-10" />
        <img src={t5} alt="testimonal" className="w-[600px] pt-10" />

    </section>
    {/* <Link to="/home/signup" className="text-center text-1xl font-bold bg-black text-white px-20 py-5 rounded-3xl mt-16">
        Become a Bee
    </Link> */}
</section>
  )
}

export default Testimonials