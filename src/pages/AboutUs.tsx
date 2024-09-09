//import React, { useState, useEffect } from "react";
import Layout from '../layout/Layout';
import {About} from './Home';

export default function AboutUs() {
  return(
    <Layout>
      <HeaderSect />
      <About />
      <AboutDesc />
    </Layout>
  );
};

//*---------------------------------------------------

export function HeaderSect() {  
  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
    return (
      <div className="relative isolate overflow-hidden bg-Beta-secondary py-36 sm:py-32">
        <img alt="" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
        <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          {/* <div style={{ clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"/> */}
        </div>
        <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          {/* <div style={{ clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"/> */}
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose Decipher Agency for cost-flexible digital marketing solutions, transparent communication and exceptional quality.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
        </div>
      </div>
    )
}

import ValueoneSVG from '../assets/ExcellenceValue.svg';
import ValuetwoSVG from '../assets/InnovationValue.svg';
import ValuethreeSVG from '../assets/CentricValue.svg';
import ValuefourSVG from '../assets/CollabValue.svg';
import ValuefiveSVG from '../assets/IntegrityValue.svg';

export function AboutDesc() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-left">
          <p className="text-primary-foreground font-semibold">What we value</p>
          <h2 className="text-4xl font-bold mb-4">Work Culture</h2>
          <p className="text-muted-foreground mb-6">
            Our culture is characterized by a dynamic and inclusive environment that promotes individual growth and team cooperation.
          </p>
          <p className="text-muted-foreground">
            We encourage open and honest dialogue at all levels, promoting transparency and constructive feedback. Prioritizing the growth of our team, we provide ongoing training, development opportunities, and access to the latest industry information. Additionally, we promote a healthy work-life balance, supporting flexible work arrangements that allow our team to thrive both personally and professionally.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div>
            <ul className='flex flex-col gap-3'>
              <li className="flex items-start gap-3">
                <img src={ValueoneSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className='font-semibold'>Excellence: </span>
                  We strive for excellence in all our efforts, aiming to provide exceptional service and results, based on a positive rate of return from our employees.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuetwoSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Innovation: </span>
                  We foster a culture of innovation, constantly seeking new ideas and solutions to stay ahead in the digital marketing landscape..
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuethreeSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Client Orientation: </span>
                  We are committed to understanding and meeting the needs of our customers, ensuring that their success is our top priority through monthly targets to be achieved.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuefourSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Collaboration: </span>
                  We believe in the power of collaboration, working as a team to achieve collective goals and achieve exceptional results.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuefiveSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Integrity: </span>
                  We uphold the highest standards of integrity, maintaining transparency and trust in all our relationships and operations.
                </p>
              </li>
            </ul>
            
            <p className="text-muted-foreground mt-6">
              This environment allows each member of the team to give the best of themselves, thus ensuring collective success and a favorable work environment where everyone can flourish.
            </p>
          </div>
          <div className="border-l pl-8">
            <blockquote className="text-lg font-semibold text-muted-foreground">
              “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum
              justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”
            </blockquote>
            <div className="flex items-center mt-4">
              <div className="ml-4">
                <p className="text-sm font-semibold">Brenna Goyette</p>
                <p className="text-sm text-muted-foreground">@brenna</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Work environment</h2>
          <p className="text-muted-foreground mb-4">
            Our culture is characterized by a dynamic and inclusive environment that promotes individual growth and team cooperation. Here are the main aspects of our culture:
          </p>
          <ul className='flex flex-col gap-3 mb-4'>
            <li><span className='underline'>Open Communication:</span> We encourage open and honest dialogue at all levels, promoting transparency and constructive feedback.</li>
            <li><span className='underline'>Continuous Learning:</span> We prioritize the growth of our team through ongoing training, development opportunities, and access to the latest industry information.</li>
            <li><span className='underline'>Work-Life Balance:</span> We promote a healthy work-life balance, supporting flexible work arrangements that allow our team to thrive personally and professionally.</li>
          </ul>
          <p>This environment allows each member of the team to give the best of themselves, thus ensuring collective success and a favorable work environment where everyone can flourish.</p>
        </div>
      </div>
    </section>
  )
};

