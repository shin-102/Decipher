import React, { useState, useEffect } from 'react';

const icons = [
  '../assets/TechIcon/Blender.png',
  '../assets/TechIcon/BootstrapLogo.png',
  '../assets/TechIcon/CanvaSVG.png',
  '../assets/TechIcon/CssSVG.png',
  '../assets/TechIcon/FigLogo.png',
  '../assets/TechIcon/GithubLogo.png',
  '../assets/TechIcon/GitSVG.png',
  '../assets/TechIcon/HtmlLogo.png',
  '../assets/TechIcon/Illustrator.png',
  '../assets/TechIcon/Jira.png',
  '../assets/TechIcon/JSLogo.png',
  '../assets/TechIcon/Photoshop lightroom.png',
  '../assets/TechIcon/PostCSS.png',
  '../assets/TechIcon/WordPress.png',
  '../assets/TechIcon/Photoshop.png',
  '../assets/TechIcon/PostgresSQL.png',
  '../assets/TechIcon/Premiere pro.png',
  '../assets/TechIcon/react.png',
  '../assets/TechIcon/Sass.png',
  '../assets/TechIcon/Shopify.png',
  '../assets/TechIcon/Tailwind CSS.png',
  '../assets/TechIcon/TypeScript.png',
  '../assets/TechIcon/Webflow.png',
  '../assets/TechIcon/WooCommerce.png',
];

const IconSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel flex overflow-hidden relative w-full h-64"> {/* Fixed height */}
      {icons.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          className="w-20 h-20 object-cover transition-transform"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: 'transform 1s linear',
          }}
        />
      ))}
    </div>
  );
};

export default IconSlider;