import React from 'react'
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return (
    <main className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
    <div>
        <ContactHero/>
    </div>
    <div>
      <ContactForm/>
    </div>
    
    </main>
  );
}

export default ContactPage