//import React, { useState, useEffect } from "react";
import Layout from '../layout/Layout';
import { Contact as ContactForm}  from './Home';
import { Flag } from './Home';

export default function Contact() {
  return(
    <Layout>
      <div></div>
      <Connect />
    </Layout>
  );
};

export const Connect = () => {
  return(
    <article className='container mx-auto flex items-center justify-center gap-12'>
      <section className='w-full'>
        <Flag title='Contact Us' />
        <h2>Ready to Connect with us ?</h2>
        <div className='flex flex-col gap-4 mt-12'>
          <h3>Kenitra</h3>
          <hr className='w-1/2'/>
          <p>23, Rue Anoual, Immeuble Fleury 11, bureau &#8470;4 <br /> Mimousa - Kenitra</p>
          <span className='text-Alpha'>contact@decipher-agency.com</span>
          <p>07 62 86 16 97</p>
        </div>

        <div className='mt-12'>
          <h4>Are you looking for Job Opportunities ?</h4>
        </div>
        
      </section>
      <ContactForm />
    </article>
  )
}