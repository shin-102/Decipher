//import React, { useState, useEffect } from "react";
import Layout from '../layout/Layout';
import {About} from './Home';

export default function AboutUs() {
  return(
    <Layout>
      {/* <HeaderSect /> */}
      <Cases />
      <About />
      <AboutDesc />
    </Layout>
  );
};

//*---------------------------------------------------

export function HeaderSect() {  
  const links = [
    { name: 'Open roles', href: 'https://ma.indeed.com/jobs?q=Decipher&l=K%C3%A9nitra' },
    /*{ name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },*/
  ]
  const stats = [
    { name: 'Local office', value: '1' },
    /*{ name: 'Team members', value: '9' },
    { name: 'Services provided', value: '+60' },*/
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

import Alphabet from '../assets/logo-cases/alphabet.png';
import LDV from '../assets/logo-cases/LDV-removebg.png';
import Demarco from '../assets/logo-cases/DEMARCO.png';
import Gmedia from '../assets/logo-cases/Gmedia.png';

export function Cases() {
  return(
<section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                    Depuis 2023.<br />
                    1 atelier<br />
                    Multiple projets.<br />
                </h2>
                <p className="mt-6 text-base ">Notre administration veille à ce que le flux de travail de son département de production soit ininterrompu, ce qui se traduit par une croissance, une satisfaction des clients et un gain pour toutes les parties.</p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div>
                        <img className="object-contain w-full h-40 mx-auto filter grayscale" src={Alphabet} alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-full h-40 mx-auto filter grayscale" src={LDV} alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-full h-40 mx-auto filter grayscale" src={Demarco} alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-full h-20 mx-auto filter grayscale" src={Gmedia} alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
            </div>
        </div>
    </div>
</section>

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
          <p className="text-primary-foreground font-semibold">Nos valeurs</p>
          <h2 className="text-4xl font-bold mb-4">Culture d'entreprise</h2>
          <p className="text-muted-foreground mb-6">
            Notre culture se caractérise par un environnement dynamique et inclusif qui favorise le développement individuel et la coopération au sein de l'équipe.
          </p>
          <p className="text-muted-foreground">
            Nous encourageons un dialogue ouvert et honnête à tous les niveaux, en favorisant la transparence et un retour d'information constructif. Accordant la priorité à la croissance de notre équipe, nous proposons une formation continue, des opportunités de développement et l'accès aux dernières informations du secteur. En outre, nous encourageons un bon équilibre entre vie professionnelle et vie privée, en favorisant des modalités de travail flexibles qui permettent à notre équipe de s'épanouir tant sur le plan personnel que professionnel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div>
            <ul className='flex flex-col gap-12'>
              <li className="flex items-start gap-3">
                <img src={ValueoneSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className='font-semibold'>Excellence: </span>
                  Nous visons l'excellence dans tous nos efforts, afin de fournir un service et des résultats exceptionnels, sur la base d'un taux de retour positif de la part de nos employés.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuetwoSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Innovation: </span>
                  Nous encourageons une culture de l'innovation, en recherchant constamment de nouvelles idées et solutions pour rester en tête dans le paysage du marketing numérique.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuethreeSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Orientation du client: </span>
                  Nous nous engageons à comprendre et à satisfaire les besoins de nos clients, en veillant à ce que leur réussite soit notre priorité absolue grâce à des objectifs mensuels à atteindre.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuefourSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Collaboration: </span>
                  Nous croyons au pouvoir de la collaboration, en travaillant en équipe pour atteindre des objectifs collectifs et obtenir des résultats exceptionnels.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src={ValuefiveSVG} alt="value 1" className='w-14'/>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Intégrité: </span>
                  Nous respectons les normes d'intégrité les plus élevées, en maintenant la transparence et la confiance dans toutes nos relations et opérations.
                </p>
              </li>
            </ul>
            
            <p className="text-muted-foreground mt-6">
              Cet environnement permet à chaque membre de l'équipe de donner le meilleur de lui-même, assurant ainsi une réussite collective et un environnement de travail favorable à l'épanouissement de chacun.
            </p>
          </div>
          {/* <div className="border-l pl-8">
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
          </div> */}
        </div>
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Work environment</h2>
          <p className="text-muted-foreground mb-4">
            Our culture is characterized by a dynamic and inclusive environment that promotes individual growth and team cooperation. Here are the main aspects of our culture:
          </p>
          <ul className='flex flex-col gap-3 ml-4 mb-4'>
            <li><span className='underline'>Open Communication:</span> We encourage open and honest dialogue at all levels, promoting transparency and constructive feedback.</li>
            <li><span className='underline'>Continuous Learning:</span> We prioritize the growth of our team through ongoing training, development opportunities, and access to the latest industry information.</li>
            <li><span className='underline'>Work-Life Balance:</span> We promote a healthy work-life balance, supporting flexible work arrangements that allow our team to thrive personally and professionally.</li>
          </ul>
          <p>This environment allows each member of the team to give the best of themselves, thus ensuring collective success and a favorable work environment where everyone can flourish.</p>
        </div> */}
      </div>
    </section>
  )
};

