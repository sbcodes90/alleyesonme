import { useState } from "react";
import beeIcon from "../images/bee.png";
import honeycomb from "../images/honey-comb.png";
import miniHive from "../images/sweet.png";
import ProgramForm from "./ProgramForm";
import Navigation from "./Navigation";

export default function ProgramInfo() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ProgramForm setIsOpen={setIsOpen} isOpen={isOpen} />}
      <Navigation />
      <section className="lg:pb-20 flex flex-col lg:gap-10">
        <div className=" text-3xl text-white py-16 text-center bg-black font-light">
          Programs
        </div>

        <section className="lg:mx-10 md:border-4 md:border-black md:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center bg-yellow-100 lg:rounded-3xl p-12 ">
            <div className="flex flex-col justify-center items-center">
              <img src={beeIcon} alt="beeIcon" className=" w-40" />
              <div className="font-bold text-2xl">One-on-One Tutoring</div>
            </div>
            <div className="bg-yellow-100 rounded-3xl px-5 lg:px-20 my-10">
              <div className="text-lg font-bold mb-5 text-center">
                Stop stressing about “New Math”!
              </div>
              <div className="text-md">
                One on One Tutoring services are conveniently provided via{" "}
                <strong>Instagram @_holisticedu.</strong>
                In person sessions will be available in Atlanta coming soon.{" "}
              </div>
              <br></br>
              Does your child tend to forget things said during math lessons
              easily? No problem! Tell me the standard/skill or simply send a
              picture of what they are learning for the week/unit, and I have it
              covered from there. No more frustrating late nights at the table
              that end with you giving them the answers (oh we know). Watch them
              master content and teach you a few new strategies. Feel the reward
              of knowing you invested in your child’s academic success! Have a
              certified educator mirror your child’s{" "}
              <strong>IEP math goals and strategies</strong>{" "}
              as closely as possible. You pick the time slots that work best for
              your schedule and see your child’s overall level of confidence
              increase!
              <br></br>
              <br></br>
              <strong>
                Sign up for updates below! Enrollment will begin soon!
              </strong>
              <div>
                <button
                  type="submit"
                  onClick={() => setIsOpen(true)}
                  className="bg-black text-white w-full rounded-3xl py-5 mt-5 font-bold text-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:mx-10 md:border-4 md:border-black md:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center bg-pink-100 lg:rounded-3xl p-12 ">
            <div className="flex flex-col justify-center items-center">
              <img src={honeycomb} alt="beeIcon" className="pb-2 w-40" />
              <div className="font-bold text-2xl">Parent Bootcamp</div>
            </div>
            <div className=" rounded-3xl  px-5 lg:px-20 py-5 my-10">
              <div className="text-xl font-bold mb-5 text-center">
                Have you ever looked at your child’s Math homework and
                automatically got a headache?
              </div>
              It looks like a foreign language, right? Did you help them find
              the answer and it came back marked wrong? Children today are being
              taught <strong>"NEW"</strong> strategies to solve math problems. As an educator,
              I’ve never felt comfortable sending work home for parents to
              review/assist your child without offering the opportunities to
              teach parents the new strategies. How can you adequately help your
              child if you have no clue what they are doing? You cannot.
              <br></br>
              <br></br>Parent Boot Camp allows me to go through step by step and
              model how to accurately use the <strong>"NEW MATH"</strong> strategies being used
              in classrooms around the world today. This opportunity will ensure
              you are familiar with what your child will be bringing home.
              Attending our parents only, judgement free boot camp will give you
              the confidence needed to fully support your young scholar. This is
              NOT the same math we did in school. Remember, it takes a village!
              Let me help you so you can help your baby.
              <br></br>
              <br></br>
              <strong>
                Sign up for updates below! Enrollment will begin soon!
              </strong>
              <div>
                <button
                  type="submit"
                  onClick={() => setIsOpen(true)}
                  className="bg-black text-white w-full rounded-3xl py-5 mt-5 font-bold text-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:mx-10 md:border-4 md:border-black md:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center bg-teal-100 lg:rounded-3xl p-12 ">
            <div className="flex flex-col justify-center items-center">
              <img src={miniHive} alt="beeIcon" className="pb-2 w-40" />
              <div className="font-bold text-2xl">Mathematics in the Park</div>
            </div>
            <div className=" rounded-3xl  px-5 lg:px-20 py-5 my-10">
              <div className="text-xl font-bold mb-5 text-center">
                Join me as we laugh and learn while enjoying some Vitamin D!
              </div>
              This is a <strong>FREE</strong> event held on various{" "}
              <strong>Saturdays and Sundays from 10AM-12PM</strong> throughout
              the year for parents and children. You must stay with your child
              the entire duration of the lesson.
              <div className="font-bold mt-5">
                Sign up for updates below! Enrollment will begin soon!
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => setIsOpen(true)}
                  className="bg-black text-white w-full rounded-3xl py-5 mt-5 font-bold text-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:mx-10 md:border-4 md:border-black md:rounded-3xl">
          <div className="grid grid-cols-1 w-full justify-center items-center bg-purple-100 lg:rounded-3xl p-12 ">
            <div className="flex flex-col justify-center items-center">
              <img src={miniHive} alt="beeIcon" className="pb-2 w-40" />
              <div className="font-bold text-2xl">Mathematician Toolbox</div>
            </div>
            <div className=" rounded-3xl  px-5 lg:px-20 py-5 my-10">
              <div className="text-xl font-bold mb-5 text-center">
                Have your child’s math classroom delivered to your front door!
              </div>
              Our mathematician toolbox contains everything your elementary
              mathematical engineer needs to be successful. It will allow them
              to create the exact mathematical experiences from school by having
              the same tools and charts at their fingertips. Years of research
              has proven that math manipulatives (tools) and visual notes
              (charts) provide learning experiences that aid with information
              retention and content mastery.
              <section id="mobile-view" className="lg:hidden">
                <div className="font-bold py-5">
                  Each Mathematician Toolbox Contains:
                </div>
             
                  <ul className="font-medium normal-case list-disc	">
                  <li>1 Reference name plate</li>
                  <li> 1 Notebook</li>
                  <li> 1 pack of line paper</li> <li>1 Folder</li>
                  <li>10 Pencils</li>
                  <li>1 Sharpener</li>
                  <li>1 Ruler</li>
                  <li>2 Erasers</li>
                  <li>1 pack of crayons</li>
                  <li>Glue</li>
                  <li>1 pack of markers</li>
                  <li>1 pair of scissors</li>
                  <li>Base 10 blocks,</li>
                  <li>Paper money and coins</li>
                  <li>Counters</li>
                  <li>Personal size teaching analog clock</li>
                  <li>Pattern blocks</li>
                  <li>Square tiles</li>
                  <li>2 ten frame boards and counter set</li>
                  <li>Cut-out Fraction tiles</li>
                  <li>Cut-out number line (1-100),</li>
                  <li>Number chart</li>
                  <li>(1-120 with word form)</li>
                  <li>Multiplication chart (0-12)</li>
                  <li>Place value chart</li>
                  <li>
                    Blank no lines index cards to create flash cards That fit
                    your child’s needs,
                  </li>
                  <li>Geometry charts (shapes, lines, angles)</li>
                  <li>
                    Conversion charts (metric/customary, length, time, capacity,
                    weight, fractions, percent, decimals)
                  </li>
                  <li>Multiplication strategies</li>
                  <li>Division strategies</li>
                  <li>PEMDAS</li> <li>Number grid</li>
              <li>Rounding chart</li>
              
            <li>C.U.B.E.S. (problem solving steps)</li>
            <li>Special
                  quotients</li>
                  <li>Properties of multiplication</li>
                  <li>Fraction Facts</li>
                  </ul>
                  <div className="py-5 font-black">*Contents subject to change based on availability*</div>
              
              </section>
              <section id="desktop-view" className="hidden md:hidden lg:block">
                <div className="font-bold py-5">
                  Each Mathematician Toolbox Contains:
                </div>
             <div>
                  <ul className="font-medium normal-case list-disc flex flex-col-2 justify-between items-start p-5">
                    <div>
                  <li>1 Reference name plate</li>
                  <li> 1 Notebook</li>
                  <li> 1 pack of line paper</li>
                  <li>1 Folder</li>
                  <li>10 Pencils</li>
                  <li>1 Sharpener</li>
                  <li>1 Ruler</li>
                  <li>2 Erasers</li>
                  <li>1 pack of crayons</li>
                  <li>Glue</li>
                  <li>1 pack of markers</li>
                  <li>1 pair of scissors</li>
                  <li>Base 10 blocks,</li>
                  <li>Paper money and coins</li>
                 
                  <li>Counters</li>
                  <li>Personal size teaching analog clock</li>
                  <li>Pattern blocks</li>
                  <li>Square tiles</li>
                  <li>2 ten frame boards and counter set</li>
               </div>
               <div>
                  <li>Cut-out Fraction tiles</li>
                  <li>Cut-out number line (1-100),</li>
                  <li>Number chart</li>
                  
                
                  <li>(1-120 with word form)</li>
                  <li>Multiplication chart (0-12)</li>
                  <li>Place value chart</li>
                  <li>
                    Blank no lines index cards to create flash cards That fit
                    your child’s needs,
                  </li>
                  <li>Geometry charts (shapes, lines, angles)</li>
                  <li>
                    Conversion charts (metric/customary, length, time, capacity,
                    weight, fractions, percent, decimals)
                  </li>
                  <li>Multiplication strategies</li>
                  <li>Division strategies</li>
                  <li>PEMDAS</li> <li>Number grid</li>
              <li>Rounding chart</li>
              
            <li>C.U.B.E.S. (problem solving steps)</li>
            <li>Special
                  quotients</li>
                  <li>Properties of multiplication</li>
                  <li>Fraction Facts</li>
                  </div>
                  </ul>
                  </div>
                  <div className="py-5 font-black text-center mt-5">*Contents subject to change based on availability*</div>
              
              </section>
              <div className="font-bold mt-5 text-center">
                Sign up for updates below! Enrollment will begin soon!
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => setIsOpen(true)}
                  className="bg-black text-white w-full rounded-3xl py-5 mt-5 font-bold text-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
