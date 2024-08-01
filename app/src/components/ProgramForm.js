import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function ProgramForm({ isOpen, setIsOpen }) {

    const form = useRef ();


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
    <>
       {/*  <form ref={form} onSubmit={tutoringSignUp}>
          <div><input type="text" name="user_email" placeholder='Enter your email address' className=' border-black border-solid border-2 w-full rounded-3xl p-5 mb-3' /></div>
          <div><input hidden type="checkbox" id="tutoring" name="tutoring" value="tutoring" defaultChecked="true"  />
          <label className='hidden'>One on One Tutoring</label></div>
          <div><button type="submit" className='bg-black text-white w-full rounded-3xl py-5'>Sign Up</button></div>
          </form> */}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/70" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
  </>
  )
}
