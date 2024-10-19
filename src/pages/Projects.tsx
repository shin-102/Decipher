import React, { useState } from 'react';
import Layout from "../layout/Layout";
import { HeaderSect, Cases } from "./AboutUs";

export default function Projects() {
    return(
      <Layout>
        <HeaderSect />
        <Cases />
        <section className="container mx-auto grid-cols-2">
          <ProjectGrid />
        </section>
      </Layout>      
    )
}

type ProjectItemProps = {
  image: string;
  title: string;
  label: string;
};
const ProjectItem: React.FC<ProjectItemProps> = ({ image, title, label }) => {
  return (
    <div className="p-4">
      <div className="bg-Beta rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};
const ProjectGrid: React.FC = () => {
  const data = [
    { image: 'https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg', title: 'Project 1', label: 'Dev' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWX6254sEwqB5OugrTlSZtJEmKdz3Crh8q_3jcezvcQC16FuUp1nC466AJbmi0sfc9S4U&usqp=CAU', title: 'Project 2', label: 'Dev' },
    { image: 'image3.jpg', title: 'Project 3', label: 'Design' },
    { image: 'image4.jpg', title: 'Project 4', label: 'Social' },
  ];

  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-8">
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-Beta rounded" onClick={() => setFilter(null)}>All</button>
        <button className="px-4 py-2 bg-Beta rounded" onClick={() => setFilter('Dev')}>Web</button>
        <button className="px-4 py-2 bg-Beta rounded" onClick={() => setFilter('Design')}>Design</button>
        <button className="px-4 py-2 bg-Beta rounded" onClick={() => setFilter('Visual')}>Visual</button>
        <button className="px-4 py-2 bg-Beta rounded" onClick={() => setFilter('Social')}>Social</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data
          .filter((item) => (filter ? item.label === filter : true))
          .map((item, index) => (
            <ProjectItem key={index} image={item.image} title={item.title} label={item.label} />
          ))}
      </div>
    </div>
  );
};
