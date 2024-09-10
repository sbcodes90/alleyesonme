import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogBackdrop,
    Listbox,
    Transition
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function ProgramForm({ isOpen, setIsOpen }) {
    const form = useRef();
   
    const programs = [
        {  id: 0, name: 'One-on-One Tutoring' },
        {  id: 1, name: 'Parent Bootcamp' },
        {  id: 2, name: 'Mathematics in the Park'},
        {  id: 3, name: 'Mathematician Toolbox' }
    ]

    const [selectedPrograms, setSelectedPrograms] = useState([programs[0]]);
    const [selected, setSelected] = useState(programs[0])

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_puvq2v1',
                'template_noq69rv',
                form.current,
                'm2y7s6CT_76yIlrb2'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                error => {
                    console.log('FAILED...', error.text);
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
                        <XMarkIcon className='w-8 float-right' onClick={() => setIsOpen(false)} />
                        <DialogTitle className='text-center text-2xl font-black'>Sign Up</DialogTitle>
                        <Description className="px-5 pb-10 lg:px-20">

                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <header className='font-bold py-5 text-lg'>Parent Information</header>
                                    <input
                                        type="text"
                                        name="parent_first_name"
                                        placeholder="First Name"
                                        className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="parent_last_name"
                                        placeholder="Last Name"
                                        className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="user_email"
                                        placeholder="Email address"
                                        className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                                    />
                                    <header className='font-bold pt-5 text-lg'>Child Information</header>
                                    <p className='font-semibold pb-7'>(Max 2)</p>
                                    <p className='font-semibold pb-5'>Child #1</p>
                                    <input
                                        type="text"
                                        name="child_first_name_1"
                                        placeholder="First Name"
                                        className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="child_Last Name_1"
                                        placeholder="Last Name"
                                        className=" border-black border-solid border-2 w-full rounded-2xl p-5 mb-3"
                                    />
                                    <p className='font-semibold py-5'>Child #2</p>
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
                                <header className='font-bold py-5 text-lg'>Programs</header>
                                <div className="border-2 border-solid border-black p-5 text-center rounded-2xl">

                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{selected.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base   focus:outline-none sm:text-sm">
                                                    {programs.map((program, programId) => (
                                                        <Listbox.Option
                                                            key={programId}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-5 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={program}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span>
                                                                        {program.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>




                                <div>
                                    <button
                                        type="submit"
                                        className="bg-black text-white w-full rounded-3xl py-5 mt-20"
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
