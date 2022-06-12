import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const sentEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_s83yb4i', 'template_tijz4rv', event.target, 'g16R2BjQAkO5fojLp').then(res => {
            alert("Message sent successfully!!")
        }).catch(err => alert("Failed to sent message"));
    }
    return (
        <div id='contact' className='flex justify-center mt-16 pb-40 '>
            <div className="card lg:w-1/2 md:w-1/2 bg-primary customshadow1">

                <div className="card-body items-center text-center">
                    <h1 className=' mb-5 uppercase lg:text-5xl text-3xl font-semibold text-base-100'>Contact <span className='text-secondary'>Me</span> </h1>
                    <form onSubmit={sentEmail} className='flex flex-col'>

                        <input type="text" name="name" placeholder="Name" className="input input-bordered  w-80 mb-4" required />


                        <input type="text" name="email" placeholder="email" className="input input-bordered  w-80 mb-4" required />


                        <textarea className="textarea input-bordered w-80 mb-4" name="message" placeholder="Bio" required></textarea>


                        <button className="btn btn-secondary text-white mt-5 customshadow1">Send Message</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;