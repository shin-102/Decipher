//import React, { useState, useEffect } from "react";
import Layout from '../layout/Layout';
import { Contact as ContactForm}  from './Home';
import { Flag } from './Home';

export default function Contact() {
  return(
    <Layout>
      <div></div>
      <Connect />
      <Iframe />
    </Layout>
  );
};

export const Connect = () => {
  return(
    <article className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 mt-20 md:mt-0'>
      <section className='w-full ml-4 md:ml-0'>
        <Flag title='Contact Us' />
        <h2>Ready to Connect with us ?</h2>
        <div className='flex flex-col gap-4 mt-12'>
          <h3>Kenitra</h3>
          <hr className='w-1/2'/>
          <p>23, Rue Anoual, Immeuble Fleury 11, bureau &#8470;4 <br /> Mimousa - Kenitra</p>
          <ButtonMailto label="Email : contact@decipher-agency.com" sendto="mailto:contact@decipher-agency.com" />
          <ButtonMailto label="Phone : +212 7 62 86 16 97" sendto="tel:212762861697" />
        </div>

        {/* 
        //*JOB OFFERS CV drop --to be added
        <div className='mt-12'>
          <h4>Are you looking for Job Opportunities ?</h4>
        </div> 
        */}
        
      </section>
      <ContactForm />
    </article>
  )
}

export const ButtonMailto: React.FC<{ sendto: string; label: string; className?: string; }> = ({ sendto, label }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.location.href = sendto;
    e.preventDefault();
  };

  return (
    <a href="#" onClick={handleButtonClick} dangerouslySetInnerHTML={{ __html: label.replace(/\n/g, '<br />') }} title="link"/>
  );
};


export const Iframe = () => {
  return (
    <div className="w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13191.026487017421!2d-6.593728!3d34.2547534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b0f343cbfad767%3A0x5aecacc1eec48caf!2sDecipher%20Agency!5e0!3m2!1sen!2sma!4v1725980360277!5m2!1sen!2sma" width="600" height="450" title="map" className="w-full mb-20 lg:mb-0"></iframe>
    </div>
    
  )
}