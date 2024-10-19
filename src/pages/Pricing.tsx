//import React, { useState, useEffect } from "react";
import Layout from '../layout/Layout';
import { Flag } from './Home';
import { PackagesTable, CustomPack } from '../components/PackagesTable';


export default function Pricing() {
  return(
    <Layout>
      <GeneralPriceTable />
    </Layout>
  );
};

//*----------------------------------------

export function GeneralPriceTable() {
  return(
    <article className='flex flex-col gap-36 my-24'>
      <section className="flex flex-col items-center container mx-auto gap-24">
        <div>
          <Flag title="Prix avantageux"/>
          <h2>Packs Orientation Client</h2>
        </div>
        <div className="flex items-center">
          <PackagesTable RenderDetail={false}/>

        </div>
      </section>
      <PriceComparison />
      <CustomPack />
    </article>
    
  );
};


import { ComparedData, ComparisonKeys, ComparisonValues } from '../components/Comparisondata';

export const PriceComparison = () => {
  const transformPropertyName = (propertyName: string) => {
    return propertyName.replace(/_/g, ' '); // Replace underscores with spaces
  };
  return (
    <article className="container mx-auto">
      <table className="mt-12 bg-Beta w-full">
        <thead>
          <tr>
            <th className='py-5'>Plan comparison</th>
            {ComparisonKeys.map((key) => (
              <th key={key} className='text-left capitalize'>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border-t border-gray-500 bg-Beta-secondary">
          {Object.keys(ComparisonValues[0]).map((property) => (
            <tr key={property} className='border-b border-white/10'>
              <td  className='py-5 px-4 capitalize'>{transformPropertyName(property)}</td>
              {ComparisonValues.map((obj, index) => (
                <td key={index} className='border-black/20 border-collapse text-base lg:text-xl'>
                  {
                    typeof obj[property as keyof ComparedData] === 'boolean' ? //is object's props has a boolean value ?
                    ( obj[property as keyof ComparedData] ? //boolean true => checkmark, otherwise => "-"
                      <span className='text-Alpha font-bold'>&#x2713;</span> : <span className='text-gray-400'> - </span> 
                    ) : ( 
                      typeof obj[property as keyof ComparedData] === 'number' ? //is obj's prop a number ?
                      ( //give it Alpha custom color
                        <span className='text-Alpha'>{obj[property as keyof ComparedData]}</span> 
                      ) : ( 
                        typeof obj[property as keyof ComparedData] === 'string' ? //is it a string ?
                          (
                            <span>
                              {(obj[property as keyof ComparedData] as string).split('').map((char : string, index: number) => { 
                                // string props are split into chars. mapped in order to check IF number or not.
                                return isNaN(Number(char)) ? 
                                  (<span key={index}>{char}</span>) : (<span key={index} className='text-Alpha'>{char}</span>);
                              })}
                            </span>
                          ) : (
                            obj[property as keyof ComparedData] //after the ELIF's of Typescript, render the rest of props :D
                          ) 
                      ) 
                    )
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
