import hive from "../images/WelcomeToTheHive.png";
import Programs from "../components/Programs";
import Testimonials from "./Testimonials.js";
import React from 'react'
import Navigation from "./Navigation.js";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export default function Home() {


  return (
    <>
    <Navigation />
    <div className="grid grid-row justify-center items-center  h-auto lg:min-h-screen bg-cyan-200 pt-10">
      <img src={hive} alt="hive" />
    </div>
    <section className="lg:p-20">
      <div className="p-10 lg:p-20 lg:px-52">
        <span><div className=" text-xl lg:text-3xl font-black pb-5">What's this "New Math"?</div>
        </span>
        <div className="text-md font-normal">
          It is my personal belief that today’s “New
          Math” helps develop our children into critical thinking mathematical
          engineers. Engineers have numerous ways to process information and
          solve problems. “New Math” allows students to decompose and analyze
          numbers in ways we could have never imagined while in elementary
          school. It promotes critical thinking and number fluency. <div className="pt-5">Yes, it
          can be challenging and overwhelming to assist/review math
          assignments because we did not learn the common core way when we
          were in school but, it is needed in today’s 21st century society.</div>
          <div className="pt-5"><strong>Don’t worry, we are in this together!</strong>
           { ' ' }I have created a program
          specifically for parents to teach you everything you need to assist
          your child with their assignments. My <HashLink className="font-bold" smooth to="/program-info#parent-bootcamps">Parent Boot Camps</HashLink>{' '}
          are tutoring sessions for adults where you become
          the student and learn all the skills and strategies they are using
          in class.</div>
        </div>
      </div>
      </section>
      <Programs />
            <Testimonials />
  </>
  )
}
