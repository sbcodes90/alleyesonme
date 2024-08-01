import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Listbox,
} from '@headlessui/react';

export default function ProgramForm({isOpen, setIsOpen}) {
  const form = useRef ();
  const programs = [
    {id: 1, name: 'One-on-One Tutoring'},
    {id: 2, name: 'Parent Bootcamp'},
    {id: 3, name: 'Mathematics in the Park'},
    {id: 4, name: 'Benedict Kessler'},
    {id: 5, name: 'Katelyn Rohan'},
  ];

  const [selectedPrograms, setSelectedPrograms] = useState ([programs[0], programs[1]]);

  const sendEmail = e => {
    e.preventDefault ();

    emailjs
      .sendForm (
        'service_puvq2v1',
        'template_noq69rv',
        form.current,
        'm2y7s6CT_76yIlrb2'
      )
      .then (
        () => {
          console.log ('SUCCESS!');
        },
        error => {
          console.log ('FAILED...', error.text);
        },
        e.target.reset ()
      );
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen (false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/70" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          {' '}       {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12 lg:min-w-[1000px] lg:h-auto">
            <DialogTitle className="font-bold">Program Sign Up</DialogTitle>
            <Description className="lg:p-40">

              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <header>Parent Information</header>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email address"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <header>Child Information</header>
                  <p>Max 2</p>
                  <p>Child #1</p>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <p>Child #2</p>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className=" border-black border-solid border-2 w-full rounded-3xl p-5 mb-3"
                  />
                </div>
                <div>
                  <Listbox
                    value={selectedPrograms}
                    onChange={setSelectedPrograms}
                    multiple
                  >
                    <Listbox.Button>
                      {selectedPrograms.map (program => program.name).join (', ')}
                    </Listbox.Button>
                    <Listbox.Options>
                      {programs.map (program => (
                        <Listbox.Option key={program.id} value={program}>
                          {program.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text-white w-full rounded-3xl py-5"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </Description>
            {/*  <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div> */}
          </DialogPanel>
        </div>

      </div>
    </Dialog>
  );
}
