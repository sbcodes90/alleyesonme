import { useState} from 'react';
import beeIcon from '../images/bee.png';
import honeycomb from '../images/honey-comb.png';
import miniHive from '../images/sweet.png';
import ProgramForm from './ProgramForm';
import Navigation from './Navigation';

export default function ProgramInfo () {
  let [isOpen, setIsOpen] = useState(false)
 
  return (
    <>
      {isOpen && <ProgramForm setIsOpen={setIsOpen} isOpen={isOpen} />}
      <Navigation />
      <section className="pb-20 flex flex-col lg:gap-10">
        <div className=" text-3xl text-white py-16 text-center bg-black font-bold">
          Programs
        </div>

        <section className="lg:mx-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center bg-yellow-500 lg:rounded-3xl p-10 "
          >
            <div className="flex flex-col justify-center items-center">
              <img src={beeIcon} alt="beeIcon" className=" w-40" />
              <div className="font-bold text-2xl">One-on-One Tutoring</div>
            </div>
            <div className="bg-yellow-100 rounded-3xl px-20 lg:px-20 py-10 my-10">
              <div className='text-lg font-bold mb-5 text-center'>Stop stressing about “New Math”!</div>
              <div className='text-md'>One on One Tutoring services are
              conveniently provided via <strong>Instagram @_holisticedu.</strong>
              In person sessions will be available in Atlanta coming soon. </div>
              <br></br>
              <br></br>
              Does your child
              tend to forget things said during math lessons easily? No problem!
              Tell me the standard/skill or simply send a picture of what they
              are learning for the week/unit, and I have it covered from there.
              No more frustrating late nights at the table that end with you
              giving them the answers (oh we know). Watch them master content
              and teach you a few new strategies. Feel the reward of knowing you
              invested in your child’s academic success! Have a certified
              educator mirror your child’s <strong>IEP math goals and strategies</strong>
               as
              closely as possible. You pick the time slots that work best for
              your schedule and see your child’s overall level of confidence
              increase!
              <br></br> 
              <br></br>
              <strong>Sign up for updates below! Enrollment will begin soon!</strong>
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
        <section className="lg:mx-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center bg-pink-400 lg:rounded-3xl p-10 "
          >
            <div className="flex flex-col justify-center items-center">
            <img src={honeycomb} alt="beeIcon" className="pb-2 w-40" />
            <div className='font-bold text-2xl'>Parent Bootcamp</div>
            </div>
            <div className="bg-pink-200 rounded-3xl  px-20 lg:px-20 py-10 my-10">
              <div className='text-xl font-bold mb-5 text-center'>Have you ever looked at your child’s Math homework and automatically got a headache?</div>
              It looks like a foreign language, right? Did you help them find the answer and it came back marked wrong? Children today are being taught "NEW" strategies to solve math problems. As an educator, I’ve never felt comfortable sending work home for parents to review/assist your child without offering the opportunities to teach parents the new strategies. How can you adequately help your child if you have no clue what they are doing? You cannot.<br></br><br></br>Parent Boot Camp allows me to go through step by step and model how to accurately use the "NEW MATH" strategies being used in classrooms around the world today. This opportunity will ensure you are familiar with what your child will be bringing home. Attending our parents only, judgement free boot camp will give you the confidence needed to fully support your young scholar. This is NOT the same math we did in school. Remember, it takes a village! Let me help you so you can help your baby.
              <br></br> 
              <br></br>
              <strong>Sign up for updates below! Enrollment will begin soon!</strong>
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

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center lg:px-10 gap-5">
            <div className="bg-teal-300 lg:px-20 py-20 lg:py-40 lg:rounded-3xl font-bold text-2xl flex flex-col justify-center items-center lg:mt-10">
              <img src={miniHive} alt="beeIcon" className="pb-2 w-40" />
              <div>Mathematics in the Park</div>
            </div>
            <div className="bg-white p-10 lg:p-12 lg:rounded-3xl">
              <div>
                Join me as we laugh and learn while enjoying some Vitamin D!
                This is a FREE event held on various Saturdays and Sundays from
                10AM-12PM throughout the year for parents and children. You must
                stay with your child the entire duration of the lesson.{" "}
              </div>
              <div className="grid grid-cols-1 w-full justify-center items-center ">
                <div className="font-bold text-center pb-5">
                  Sign up for updates below! Enrollment will begin soon!
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={() => setIsOpen(true)}
                    className="bg-black text-white w-full rounded-3xl py-5"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center lg:px-10 gap-5">
            <div className="pt-20">
              <div className="bg-purple-500 lg:px-20 py-20 lg:py-40 lg:rounded-3xl font-bold text-2xl flex flex-col justify-center items-center">
                <img src={miniHive} alt="beeIcon" className=" w-40" />
                <div>Mathematician Toolbox</div>
              </div>
              <div className="border-black border-solid lg:rounded-3xl border-2 p-5 lg:mt-5 bg-black text-white">
                <div className="font-bold lg:pt-5 pb-5 pl-2">
                  Have your child’s math classroom delivered to your front door!
                </div>

                <div className="pl-2">
                  Our mathematician toolbox contains everything your elementary
                  mathematical engineer needs to be successful. It will allow
                  them to create the exact mathematical experiences from school
                  by having the same tools and charts at their fingertips. Years
                  of research has proven that math manipulatives (tools) and
                  visual notes (charts) provide learning experiences that aid
                  with information retention and content mastery.{" "}
                </div>
              </div>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-3xl">
              <div className="">
                <div className="pt-5">
                  <strong>Each Mathematician Toolbox Contains: </strong>1
                  REFERENCE NAME PLATE, 1 NOTEBOOK, 1 PACK OF LINE PAPER, 1
                  FOLDER, 10 PENCILS, 1 SHARPENER, 1 RULER, 2 ERASERS, 1 PACK OF
                  CRAYONS, GLUE, 1 PACK OF MARKERS, 1 PAIR OF SCISSORS, BASE 10
                  BLOCKS, PAPER MONEY AND COINS, COUNTERS, PERSONAL SIZE
                  TEACHING ANALOG CLOCK, PATTERN BLOCKS, SQUARE TILES, 2 TEN
                  FRAME BOARDS AND COUNTER SET, CUT-OUT FRACTION TILES, CUT-OUT
                  NUMBER LINE (1-100), NUMBER CHART (1-120 WITH WORD FORM),
                  MULTIPLICATION CHART (0-12), PLACE VALUE CHART, BLANK NO LINES
                  INDEX CARDS TO CREATE FLASH CARDS THAT FIT YOUR CHILD’S NEEDS,
                  GEOMETRY CHARTS (SHAPES, LINES, ANGLES), CONVERSION CHARTS
                  (METRIC/CUSTOMARY, LENGTH, TIME, CAPACITY, WEIGHT, FRACTIONS,
                  PERCENT, DECIMALS), MULTIPLICATION STRATEGIES, DIVISION
                  STRATEGIES, PEMDAS, NUMBER GRID, ROUNDING CHART, C.U.B.E.S.
                  (PROBLEM SOLVING STEPS), SPECIAL QUOTIENTS, PROPERTIES OF
                  MULTIPLICATION, FRACTION FACTS{" "}
                  <strong>
                    <br />
                    *CONTENTS SUBJECT TO CHANGE BASED ON AVAILABILITY*
                  </strong>
                </div>
              </div>
              <div className="grid grid-cols-1 w-full justify-center items-center ">
                <div className="font-bold text-center pb-5">
                  Sign up for updates below! Enrollment will begin soon!
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={() => setIsOpen(true)}
                    className="bg-black text-white w-full rounded-3xl py-5"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
