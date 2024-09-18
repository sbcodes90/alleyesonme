import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Select from 'react-select'

export default function ProgramForm({ isOpen, setIsOpen }) {
  const form = useRef();

  const options = [
    { value: 'One-on-One Tutoring', label: 'One-on-One Tutoring' },
    { value: 'Parent Bootcamp', label: 'Parent Bootcamp' },
    { value: 'Mathematics in the Park' , label: 'Mathematics in the Park' },

  ]
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_puvq2v1",
        "template_noq69rv",
        form.current, {
        publicKey:  "m2y7s6CT_76yIlrb2",
        })
      .then(
        (response) => {
          if(response.status === 200) {
            setIsOpen(false)
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
        e.target.reset()
      );
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/70" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-5 lg:min-w-[800px] lg:h-auto rounded-3xl">
            <XMarkIcon
              className="w-8 float-right"
              onClick={() => setIsOpen(false)}
            />
            <DialogTitle className="text-center text-2xl font-black">
              Sign Up
            </DialogTitle>
            <Description className="px-5 pb-10 lg:px-20">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <header className="font-bold py-5 text-lg">
                    Parent Information
                  </header>
                  <input
                    type="text"
                    name="parent_first_name"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                    required
                  />
                  <input
                    type="text"
                    name="parent_last_name"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                    required
                  />
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email address"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                    required
                  />
                  <header className="font-bold pt-5 text-lg">
                    Child Information
                  </header>
                  <p className="font-semibold pb-7">(Max 2)</p>
                  <p className="font-semibold pb-5">Child #1</p>
                  <input
                    type="text"
                    name="child_first_name_1"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                    required
                  />
                  <input
                    type="text"
                    name="child_Last Name_1"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                    required
                  />
                  <p className="font-semibold py-5">Child #2</p>
                  <input
                    type="text"
                    name="child_first_name_2"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                  />
                  <input
                    type="text"
                    name="child_last_name_2"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                  />
                </div>
                <header className="font-bold py-5 text-lg">Programs</header>
             
  <Select options={options} name="program" className="rounded-2xl" />

               
                  <button
                    type="submit"
                    className="bg-black text-white w-full rounded-3xl py-5 mt-20"
                  >
                    Sign Up
                  </button>
              
              </form>
            </Description>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
