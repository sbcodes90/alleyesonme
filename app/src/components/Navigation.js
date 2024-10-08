import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import newBee from "../images/new-bee.png";

export default function Navigation () {

    const [open, setIsOpen] = useState(false);


  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={newBee} alt="bee-logo" className='w-10 ml-5'/>
         {/*  <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          <span className="font-regular text-xl tracking-tight">
            <Link to="/home">123AllEyesOnMe LLC</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={()=> setIsOpen(!open) }>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        { open &&
        <div className="w-full flex flex-col justify-center items-center p-5">
          <div className="text-sm font-semibold lg:flex-row ">
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 p-3"
            >
              About
            </Link>
            <Link
            to="/program-info"
              className="block lg:inline-block lg:mt-0 text-white mr-4 p-3"
            >
              Programs
            </Link>
           {/*  <Link
              to="/home/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Become a Bee
            </Link> */}
           {/*  <Link
              to="/Home/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Donate
            </Link> */}
           {/*  <Link
              to="/Home/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Contact Us
            </Link> */}
          </div>
        </div>
}
<div  id="desktop" className="w-full hidden  flex-row lg:flex lg:items-center lg:w-auto">
          <div className="text-sm font-semibold lg:flex-row">
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-light"
            >
              ABOUT
            </Link>
            <Link
              to="/program-info"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-light"
            >
              PROGRAMS
            </Link>
            {/* <Link
              to="/home/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Become a Bee
            </Link> */}
         {/*    <Link
              to="/Home/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Donate
            </Link> */}
           {/*  <Link
              to="/Home/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Contact Us
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
