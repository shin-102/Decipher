import * as React from "react";
import Layout from '../layout/Layout';

export default function Services() {
  return(
    <Layout>
      <HeroStep/>
      <ServiceDescription service={services[0]}/>
      <ServiceDescription service={services[1]}/>
      <ServiceDescription service={services[2]}/>
      <ServiceDescription service={services[3]}/>
      <ServiceDescription service={services[4]}/>
      <div></div>
    </Layout>
  );
};


import {Steps} from './Home'
export const HeroStep = () => {
  return(
    <article className="mt-24">
      <Steps />
    </article>
  )
}

/*
? let a: Array<SDescribe> = [];
? a.push({ Dtitle : "service"});
*/
import { ServiceData, services } from "../components/Servicedata";
export const ServiceDescription: React.FC<{ service: ServiceData }> = ({ service }) => {
  return(
      <section className="flex mx-auto py-12 bg-Beta rounded-2xl border-Alpha border-b-4 border-r-4">
        <div className="container">
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">{service.title}</h2>
          <div className="mt-10 flex justify-center">
            {service.image}
            {/* className="w-full max-w-[800px] rounded-lg object-cover" */}
          </div>
          <div className="mt-12 space-y-4 px-12">
            <p className="text-muted-foreground">
              {service.definition}
            </p>
            <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {service.features}
            </ul>
          </div>
        </div>
      </section>
    )
};